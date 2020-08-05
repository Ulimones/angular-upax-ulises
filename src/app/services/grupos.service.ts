import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Grupo } from '../models/grupo.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GruposService {

  constructor(private http:HttpClient) { }
  url_api = 'https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/'

  getGrupos():Observable<Grupo[]>{
    return this.http.get(`${this.url_api}groups/ulisesv`)
    .pipe(map((res:any)=>res.data.groups))
  }

}
