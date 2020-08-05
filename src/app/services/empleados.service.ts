import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Empleado } from '../models/empleado.model';


@Injectable({
  providedIn: 'root'
})

export class EmpleadosService {

  url_api = 'https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen'

  constructor(private http:HttpClient) { }



  getEmpleados(): Observable<Empleado[]>{
    return this.http.get(`${this.url_api}/employees/ulisesv`)
    .pipe(map((resp:any)=>resp.data.employees));
  }

  agregarEmpleado(empleado:Empleado):Observable<any>{
    return this.http.post(`${this.url_api}/employees/ulisesv`,empleado);
  }

  getEmpleadosGrupo(id:number):Observable<Empleado[]>{
    let params = new HttpParams().set('id', id.toString());
    return this.http.get(`${this.url_api}/employees/ulisesv`,{params:params}).pipe(map((res:any)=>res.data.employees))
  }




}
