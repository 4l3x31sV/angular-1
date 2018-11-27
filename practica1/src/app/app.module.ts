
import { EjemploComponent } from './pages/ejemplo/ejemplo.component';
import { HomeComponent } from './pages/home/home.component';

import { MiServicioService } from './services/mi-servicio.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EjemploComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MiServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
