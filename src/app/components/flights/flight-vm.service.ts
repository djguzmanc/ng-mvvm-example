import { Injectable } from '@angular/core';
import { IFlight } from 'src/app/data/flights';
import { FlightVm } from './flight.vm';

@Injectable({ providedIn: 'root' })
export class FlightVmService {
  constructor() { }

  cancelFlight() {
    // Stuff here
  }
}