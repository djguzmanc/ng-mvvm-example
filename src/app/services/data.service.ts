import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { FLIGHTS, IFlight } from '../data/flights';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getFlights(): Observable<IFlight[]> {
    return of(FLIGHTS);
  }
}
