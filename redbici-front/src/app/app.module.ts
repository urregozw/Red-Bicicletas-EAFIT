import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MapviewComponent } from './mapview/mapview.component';
import { ListarBicicletasComponent } from './listar-bicicletas/listar-bicicletas.component';
import { MostrarBicicletaComponent } from './mostrar-bicicleta/mostrar-bicicleta.component';
import { CrearBicicletaComponent } from './crear-bicicleta/crear-bicicleta.component';
import { FormsModule } from '@angular/forms';
import { UpdateBicicletaComponent } from './update-bicicleta/update-bicicleta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MapviewComponent,
    ListarBicicletasComponent,
    MostrarBicicletaComponent,
    CrearBicicletaComponent,
    UpdateBicicletaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule // agregar FormsModule al arreglo de imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
