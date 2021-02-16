import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

import { UsuarioModel } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  displayedColumns: string[] = ['name', 'sex', 'comments'];
  usuarios: UsuarioModel[] = [];
  

  constructor( private usuariosService: UsuariosService ) { }

  ngOnInit(): void {

    this.usuariosService.getUsuarios()
      .subscribe( resp => {
        console.log(resp);
        this.usuarios = resp} );
  }

}