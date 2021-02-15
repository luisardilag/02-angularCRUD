import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  displayedColumns: string[] = ['name', 'date', 'sex', 'email', 'position', 'comments'];
  dataSource = ELEMENT_DATA;
  

  constructor() { }

  ngOnInit(): void {
  }

}

export interface Usuario {
  name: string;
  date: number;
  sex: string;
  email: string;
  position: string;
  comments: string;
}

const ELEMENT_DATA: Usuario[] = [
  {name: 'Luis Ardila', date: 34, sex: 'M', email: 'luisard@gmail.com', position: 'Ing', comments: 'Lorem'},
  {name: 'Luis Ardila', date: 34, sex: 'M', email: 'luisard@gmail.com', position: 'Ing', comments: 'Lorem'},
];