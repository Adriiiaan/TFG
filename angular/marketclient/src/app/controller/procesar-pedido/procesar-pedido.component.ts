import { CestaItem } from './../../model/CestaItem';
import { ProcesarPedidoService } from './../../service/procesar-pedido.service';
import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/model/Categoria';
import { Producto } from 'src/app/model/Producto';

@Component({
  selector: 'app-procesar-pedido',
  templateUrl: './procesar-pedido.component.html',
  styleUrls: ['./procesar-pedido.component.css']
})
export class ProcesarPedidoComponent implements OnInit{
  categorias:Categoria[];
  productos:Producto[];
  idCategoriaSel:number;
  cesta:CestaItem[];
  constructor(private procesarPedidoService:ProcesarPedidoService){


  }
  ngOnInit(): void {
    this.procesarPedidoService.categorias().subscribe(c=>this.categorias=c);
    this.cesta=[];
  }


  productosCategoria(){
    this.procesarPedidoService.productosCategorias(this.idCategoriaSel).subscribe(p=>{
      this.productos=p;
      this.actualizarStocks();
    });
  }
  actualizarStocks(){
    this.productos.forEach(p=>{
      this.cesta.forEach(c=>{
        //para cada producto de la categoria seleccionada
        //rcorremos la cesta de la compra y si se necuentra el producto en la cestas
        //debemos actualizar su stock
        if(p.idProducto==c.producto.idProducto){
          p.stock=p.stock-c.unidades;
        }
      })
    })
  }
  agregarProductoCesta(producto:Producto){
    if(producto.unidades<=producto.stock){
      let item=new CestaItem();
      item.producto=producto;
      item.unidades=producto.unidades;
      //actualizar stock
      producto.stock=producto.stock-producto.unidades;
      this.cesta.push(item);
    }else{
      alert("No hay suficiente stock");
    }
  }

  eliminarProductoCesta(pos:number){
    let item=this.cesta[pos];
    this.cesta.splice(pos,1);
    //Localizamos el producto para actualizar su stock
    let producto=this.productos.find(p=>p.idProducto==item.producto.idProducto);
    producto.stock=Number(producto.stock)+Number(item.unidades);
  }
}
