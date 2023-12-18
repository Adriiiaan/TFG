import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './controller/login/login.component';
import { FormsModule } from '@angular/forms';
import { RegistrarComponent } from './controller/registrar/registrar.component';
import { ProcesarPedidoComponent } from './controller/procesar-pedido/procesar-pedido.component';
import { ConsultarPedidosComponent } from './controller/consultar-pedidos/consultar-pedidos.component';
import { MenuComponent } from './controller/menu/menu.component';
import { PortadaComponent } from './controller/portada/portada.component';
import { PasarelaPagoComponent } from './controller/pasarela-pago/pasarela-pago.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegistrarComponent,
    ProcesarPedidoComponent,
    ConsultarPedidosComponent,
    MenuComponent,
    PortadaComponent,
    PasarelaPagoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [MenuComponent]
})
export class AppModule { }
