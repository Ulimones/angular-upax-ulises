import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from './pages/error404/error404.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { HomeComponent } from './pages/home/home.component';
import { GruposComponent } from './pages/grupos/grupos.component';


const routes: Routes = [

  { path: '', redirectTo: '', component:HomeComponent, pathMatch: 'full' },
  { path: 'empleados', component: EmpleadosComponent},
  { path: 'grupos', component: GruposComponent},
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
