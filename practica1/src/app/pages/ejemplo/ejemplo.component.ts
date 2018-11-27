import { Component, OnInit } from '@angular/core';
import { UsuarioRequest } from 'src/app/requst/usuario-request';

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.css']
})
export class EjemploComponent implements OnInit {

  public usuario: UsuarioRequest;

  constructor() {
    this.usuario = new UsuarioRequest('Alexeis', 'Carrillo' );
   }

  ngOnInit() {
  }

}
