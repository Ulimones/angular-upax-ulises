import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

import Swal from 'sweetalert2'
import { Subscription } from 'rxjs';
import { EmpleadosService } from '../../services/empleados.service';
import { Empleado } from '../../models/empleado.model';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';

import { FechaService } from '../../services/fecha.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styles: [
  ]
})
export class EmpleadosComponent implements OnInit {

  private empsubs$: Subscription;
  public empleados: Empleado[];
  public formSubmited= false;

  rows = [];
  temp = [];
  columns = [{ prop: 'name' }, { prop: 'last_name' }, { name: 'birthday' }];
  @ViewChild(DatatableComponent) table: DatatableComponent;
  ColumnMode = ColumnMode;



  public empleadoForm= this.fb.group({
    name:['',[Validators.required, Validators.minLength(3)]],
    last_name:['',[Validators.required]],
    birthday:['',[Validators.required]],
  });

 


  constructor(private empleadosServices:EmpleadosService, private fb:FormBuilder, private fs:FechaService) { }



  ngOnInit(): void {
    this.cargarEmpleados();
  }

  ngOnDestroy(): void {
    this.empsubs$.unsubscribe(); 
  }

  cargarEmpleados() {
    this.empsubs$ =  this.empleadosServices.getEmpleados().subscribe(resp=>{
      this.empleados= resp
      .map(emp=>{emp.birthday=this.fs.formato(emp.birthday); return emp;});
      this.temp = [...resp];
      this.rows = resp;   
    });
  }


  agregarEmpleado(){
    this.formSubmited=true;
    console.log(this.empleadoForm.value);
    if(this.empleadoForm.valid){ 
    this.empleadosServices.agregarEmpleado(this.empleadoForm.value).subscribe(resp=>{
      console.log(resp)
      if(resp.success){
        Swal.fire('', 'Empleado agregado', 'success')
        this.cargarEmpleados();
      }
    });
    }else{
      Swal.fire('', 'Error en el formulario', 'error')
    }
  }

  campoNoValido(campo:string):boolean{
    if(this.empleadoForm.get(campo).invalid && this.formSubmited){
      return true;
    }else{
      return false;
    }
  }

  searchEmp(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.temp.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rows = temp;
    this.table.offset = 0;
  }

 
 


}
