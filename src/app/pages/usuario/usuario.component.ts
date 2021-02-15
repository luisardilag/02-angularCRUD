import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UsuarioModel } from 'src/app/models/usuario.model';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Observable } from 'rxjs';

import Swal from 'sweetalert2'


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
    
    if( form.invalid ) {
      console.log('Formulario Inválido');
      return;
    }

    Swal.fire({
      title: 'Espere!',
      text: 'Guardando información',
      icon: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();

    let peticion: Observable<any>;

    if( this.user.id ) {
      peticion = this.usuariosService.actualizarUsuario( this.user );
    } else {
      peticion = this.usuariosService.crearUsuario( this.user );
    }

    peticion.subscribe( resp => {
      Swal.fire({
        title: 'Espere!',
        text: 'Guardando información',
        icon: 'success',
        allowOutsideClick: false
      });
    });

  }

}
