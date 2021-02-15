import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { UsuariosService } from 'src/app/services/usuarios.service';


interface SexInterface {
  value: string;
  sex: string;
}

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})

export class UsuarioComponent implements OnInit {

  user = new UsuarioModel();
  genders:SexInterface[] = [
    { value: 'm', sex: 'Masculino'  },
    { value: 'f', sex: 'Femenino' }
  ];


  constructor( private usuariosService: UsuariosService ) {

   }

  ngOnInit(): void {
  }

  guardar( form: NgForm ) {
    
    this.usuariosService.crearUsuario( this.user )
        .subscribe( resp => {

          console.log(resp);
          this.user = resp;

        });

  }

}
