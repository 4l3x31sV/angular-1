import { Component, OnInit } from '@angular/core';
import { UsuarioRequest } from './../../requst/usuario-request';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public usuario: UsuarioRequest;

  constructor() {
    this.usuario = new UsuarioRequest('Alexeis', 'Carrillo' );
   }

  ngOnInit() {
  }

}
