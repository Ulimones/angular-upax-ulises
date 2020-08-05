import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../../services/empleados.service';
import { GruposService } from '../../services/grupos.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { Subscription } from 'rxjs';
import { Empleado } from '../../models/empleado.model';
import { Grupo } from '../../models/grupo.model';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styles: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {

  private empsubs$: Subscription;
  public empleados: Empleado[];
  public grupos: Grupo[];
  public formSubmited= false;
  dataSearch:string="";

  constructor(private empleadosservice:EmpleadosService,private gruposervice:GruposService) { }

  ngOnInit(): void {
    this.cargarGrupos();
  }

  cargarGrupos() {
    this.empsubs$ =  this.gruposervice.getGrupos().subscribe(resp=>{
      this.grupos= resp;
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.grupos, event.previousIndex, event.currentIndex);
  }




}
