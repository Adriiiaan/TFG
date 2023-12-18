import { Component, OnInit } from '@angular/core';
import { DataSharingService } from 'src/app/service/data-sharing.service';
import { CestaItem } from 'src/app/model/CestaItem';
import { ProcesarPedidoService } from './../../service/procesar-pedido.service';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-pasarela-pago',
  templateUrl: './pasarela-pago.component.html',
  styleUrls: ['./pasarela-pago.component.css']
})
export class PasarelaPagoComponent implements OnInit {

  cesta: CestaItem[];
  nombre: string;
  numero: string;
  expiracion: string;
  cvv: string;
  precioTotal: number = 0;  // Agregamos una variable para el precio total

  constructor(
    private dataSharingService: DataSharingService,
    private menuComponent: MenuComponent,
    private procesarPedidoService: ProcesarPedidoService,
  ) {}

  ngOnInit() {
    // Suscribe al observable para obtener la cesta del servicio de intercambio de datos
    this.dataSharingService.cesta$.subscribe(cesta => {
      // Utiliza la cesta en este componente (pasarela de pago)
      this.cesta = cesta;
      this.calcularPrecioTotal();  // Calculamos el precio total al recibir la cesta
    });
  }

  calcularPrecioTotal() {
    // Sumamos los precios de los productos en la cesta
    this.precioTotal = this.cesta.reduce((total, item) => total + (item.producto.precioUnitario * item.unidades), 0);
  }

  ProcesarPedido() {
    if (this.verificarCampos()) {
      this.procesarPedidoService
        .enviarPedido(this.cesta, this.menuComponent.cliente.usuario)
        .subscribe({
          next: r => {
            alert('Pedido procesado');
            // Puedes reiniciar la cesta o realizar otras acciones después de procesar el pedido
            this.cesta = [];
            this.calcularPrecioTotal();  // Actualizamos el precio total después de procesar el pedido
          },
          error: e => alert('El pedido no se ha procesado')
        });
    } else {
      alert('Por favor, complete todos los campos correctamente.');
    }
  }

  verificarCampos() {
    return this.nombre && this.numero && this.expiracion && this.cvv;
  }

}
