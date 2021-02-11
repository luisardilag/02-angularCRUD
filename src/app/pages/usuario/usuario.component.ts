import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  email = new FormControl( '', [Validators.required, Validators.email]);

  getErrorMessage() {
    if( this.email.hasError('required')) {
      return 'Ingresa un email';
    }

    return this.email.hasError('email') ? 'No es un email  válido' : '';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
