import { IFlight } from 'src/app/data/flights';

export class FlightVm implements Partial<IFlight> {

  // Original properties
  destination: string;

  // Additional properties
  disabled: boolean;

  constructor(data: IFlight) {
    this.destination = data.destination;
    this.disabled = this.calcDisabled();
  }

  calcDisabled(): boolean {
    // 1000 lines function
    return false;
  }

  // constructor(data: IFlight) {
  //   Object.assign(this, data);
  //   this.disabled = false;
  // }
}
