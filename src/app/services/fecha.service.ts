import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class FechaService {

  constructor(private datePipe: DatePipe) { }

   formato(fecha) {
    return this.datePipe.transform(fecha, 'dd-MM-yyyy');
  }
}
