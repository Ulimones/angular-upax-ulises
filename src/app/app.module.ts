import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { HomeComponent } from './pages/home/home.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { GruposComponent } from './pages/grupos/grupos.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { Error404Component } from './pages/error404/error404.component';
import { EmpleadosService } from './services/empleados.service';
import { GruposService } from './services/grupos.service';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { NgDragDropModule } from 'ng-drag-drop';
 
import { DatePipe } from '@angular/common';
import { BusquedaPipe } from './pipes/busqueda.pipe';
import { FechaService } from './services/fecha.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmpleadosComponent,
    GruposComponent,
    NavbarComponent,
    Error404Component,
    BusquedaPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    NgxDatatableModule,
    DragDropModule,
    NgDragDropModule,
    NgDragDropModule.forRoot()
  ],
  providers: [EmpleadosService,GruposService, FechaService, DatePipe, BusquedaPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
