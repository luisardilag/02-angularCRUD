import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private url = '';  // COLOCA ACÁ LA URL DE LA BASE DE DATOS DE FIREBASE

  constructor( private http: HttpClient ) { }


  // CREA el usuario en la BD
  crearUsuario( usuario: UsuarioModel ) {
    return this.http.post(`${ this.url }/usuarios.json`, usuario )
              .pipe(
                map( (resp: any ) => {
                  usuario.id = resp.name;
                  return usuario;
                })
              );
  }

  // ACTUALIZA el usuario en la BD
  actualizarUsuario( usuario: UsuarioModel ) {
    const usuarioTemp = {
      ...usuario
    };
    delete usuarioTemp.id;
    return this.http.put( `${ this.url }/usuarios/${ usuario.id }.json`, usuarioTemp );
  }


  // OBTIENE los registros de la BD
  getUsuarios() {
    return this.http.get(`${ this.url }/usuarios.json`)
              .pipe(
                map( resp =>  this.crearArreglo( resp ) )
              );
  }


  // Transforma la data de Usuarios
  private crearArreglo( usuariosObj: any ) {
    const usuarios: UsuarioModel[] = [];
    if( usuariosObj === null ) { return []};

    // Convierte el Objeto con objetos, en un Arreglo de Objetos
    // console.log(Object.keys( usuariosObj ));

    Object.keys( usuariosObj ).forEach( key => {
      const usuario:UsuarioModel = usuariosObj[key];
      usuario.id = key;
      usuarios.push(usuario);
    });
    
    return usuarios;
  }
}
