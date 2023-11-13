import { Component } from '@angular/core';
import { Cliente } from 'src/app/model/Cliente';
import { LoginService } from 'src/app/service/login.service';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario:string;
  password:string;
  client:Cliente;
  constructor(private loginService:LoginService,private menuComponent:MenuComponent){

  }

  login(){
    this.loginService.login(this.usuario,this.password).subscribe(data=>{
      this.client=data;
      if(this.client!=null){//Usuario valido
        this.menuComponent.cliente=this.client;
        this.menuComponent.enabled=true;
        alert("Usuario autenticado");
      }else{//Usuario no valido
        alert("Usuario no autenticado");
      }
    });
  }
}
