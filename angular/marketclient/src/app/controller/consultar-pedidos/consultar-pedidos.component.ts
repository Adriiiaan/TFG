import { MenuComponent } from './../menu/menu.component';

import { Pedido } from 'src/app/model/Pedido';
import { ConsultarPedidosService } from './../../service/consultar-pedidos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultar-pedidos',
  templateUrl: './consultar-pedidos.component.html',
  styleUrls: ['./consultar-pedidos.component.css']
})
export class ConsultarPedidosComponent implements OnInit {
  usuario:string;
  pedidos:Pedido[];
  constructor(private consultarPedidosService:ConsultarPedidosService,private menuComponent:MenuComponent){}


  ngOnInit(): void {
    this.usuario=this.menuComponent.cliente.usuario;
    this.consultarPedidosService.consultarPedidos(this.usuario).subscribe(p=>this.pedidos=p);

  }

}
