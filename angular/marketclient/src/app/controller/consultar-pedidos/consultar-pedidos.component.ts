
import { Pedido } from 'src/app/model/Pedido';
import { ConsultarPedidosService } from './../../service/consultar-pedidos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultar-pedidos',
  templateUrl: './consultar-pedidos.component.html',
  styleUrls: ['./consultar-pedidos.component.css']
})
export class ConsultarPedidosComponent implements OnInit {
  usuario:string="user1";
  pedidos:Pedido[];
  constructor(private consultarPedidosService:ConsultarPedidosService){}


  ngOnInit(): void {
    this.consultarPedidosService.consultarPedidos(this.usuario).subscribe(p=>this.pedidos=p);

  }

}
