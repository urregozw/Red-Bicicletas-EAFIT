import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearBicicletaComponent } from './crear-bicicleta/crear-bicicleta.component';
import { ListarBicicletasComponent } from './listar-bicicletas/listar-bicicletas.component';
import { MapviewComponent } from './mapview/mapview.component';
import { MostrarBicicletaComponent } from './mostrar-bicicleta/mostrar-bicicleta.component';
import { UpdateBicicletaComponent } from './update-bicicleta/update-bicicleta.component';

const routes: Routes = [
  { path: '', component: MapviewComponent},
  { path: 'bicicletas', component: ListarBicicletasComponent},
  { path: 'bicicletas/:id/show', component: MostrarBicicletaComponent},
  { path: 'bicicletas/create', component: CrearBicicletaComponent},
  { path: 'bicicletas/:id/update', component: UpdateBicicletaComponent},
  { path: '**', component: MapviewComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
