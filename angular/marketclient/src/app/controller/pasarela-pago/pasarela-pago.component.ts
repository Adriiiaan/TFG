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
    });
  }

  ProcesarPedido() {
    if (this.verificarCampos()) {
      this.procesarPedidoService
        .enviarPedido(this.cesta, this.menuComponent.cliente.usuario)
        .subscribe({
          next: r => alert('Pedido procesado'),
          error: e => alert('El pedido no se ha procesado')
        });
    } else {
      alert('Por favor, complete todos los campos correctamente.');
    }
  }

    // En TypeScript
    verificarCampos() {
      return this.nombre && this.numero && this.expiracion && this.cvv;
    }

}
