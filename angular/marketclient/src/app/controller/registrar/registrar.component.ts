import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/model/Cliente';
import { RegistrarService } from 'src/app/service/registrar.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {
  cliente:Cliente=new Cliente();
  constructor(private registrarService:RegistrarService,private router:Router){
  }
  registrar(){
    this.registrarService.registrar(this.cliente).subscribe({
      next:data=>this.router.navigate(["/login"]),
      error:err=>alert("Usuario ya existe,utilice otro")
    });
  }
}
