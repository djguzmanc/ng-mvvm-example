import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { FlightVm } from './flight.vm';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {

  flights$: Observable<FlightVm[]>;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.flights$ = this.dataService.getFlights()
    .pipe(
      map(array => array.map(el => new FlightVm(el)))
    );
  }

}
