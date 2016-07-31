import { Injectable } from '@angular/core';
import { Coordinate } from '../shared';
import { Observable, Observer } from 'rxjs/Rx';

@Injectable()
export class LocationService {

  getCurrentPosition(): Observable<Coordinate> {
    return Observable.create((observer: Observer<Coordinate>) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            const coordinate: Coordinate = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            };
            observer.next(coordinate);
            observer.complete();
          },
          error => observer.error(error.message));
      } else {
        observer.error('Geolocation is not supported or is disabled on this device');
      }
    });
  }
}
