import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Coordinate } from '../shared/coordinate';
import 'rxjs/add/operator/map';

@Injectable()
export class GoogleMapsService {

  private static mode: string = 'walking';

  constructor(private http: Http) { }

  fetchDistances(origin: Coordinate, destinations: Coordinate[]) {
    const originString = GoogleMapsService.coordinatesToString([origin]);
    const destinationsString = GoogleMapsService.coordinatesToString(destinations);

    const url: string = `https://maps.googleapis.com/maps/api/distancematrix/json`
      + `?origins=${originString}`
      + `&destinations=${destinationsString}`
      + `&mode=${GoogleMapsService.mode}`;

    return this.http.get(url).map((res: Response) => res.json());
  }

  private static coordinatesToString(coordinates: Coordinate[]): string {
    return coordinates.map(coordinate => `${coordinate.latitude},${coordinate.longitude}`).join('|');
  }
}
