import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../../services/empleados.service';
import { GruposService } from '../../services/grupos.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
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
  public empleados: Empleado[]=[];
  public grupos: Grupo[]=[];




  public formSubmited= false;
  seleccionartodos = true;
  dataSearch:string="";
  gruposAgregados:number[]=[]
  nombreGrupoAgregado: string;

  constructor(private empleadosservice:EmpleadosService,private gruposervice:GruposService) { }

  ngOnInit(): void {
    this.cargarGrupos();
  }

  cargarGrupos() {
    this.empsubs$ =  this.gruposervice.getGrupos().subscribe(resp=>{
      this.grupos= resp;
    });
  }



  onDrop(event){
    let grupo = event.dragData as Grupo;
    if (!this.gruposAgregados.includes(grupo.id)) {
      this.nombreGrupoAgregado=grupo.name;
      this.cargarEmpleados(grupo.id);
      this.gruposAgregados.push(grupo.id);
    }
  }

  eliminarGrupos(){
    this.empleados=[];
    this.gruposAgregados=[];
  }


  cargarEmpleados(id:number){
    this.empleadosservice.getEmpleadosGrupo(id)
      .subscribe(empleados=>{
        this.empleados=this.empleados.concat(empleados); 
        this.seleccionarTodos();      
    },error=>{
      
    });
  }

  seleccionarTodos(){    
    this.empleados.map(emp=>{emp.selected=this.seleccionartodos; return emp});
    this.seleccionartodos = !this.seleccionartodos;
  }

  MostrarSeleccionados(){
    console.log(this.empleados.filter(e=>e.selected).map(em=>em.name));
  }
}




