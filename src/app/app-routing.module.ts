import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehiculoComponent } from './pages/vehiculo/vehiculo.component';
import { AgregarVehiculoComponent } from './pages/vehiculo/agregar-vehiculo/agregar-vehiculo.component';
const routes: Routes = [
  {path: 'vehiculo', component: VehiculoComponent, children: [
    {path: 'agregarvehiculo', component: AgregarVehiculoComponent },
    {path: 'edicion/:idVehiculo', component: AgregarVehiculoComponent}
  ]
  },
  {path: '**', component: VehiculoComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
