import { Coordinate } from './coordinate';

export interface Distance {
  origin: {
    coordinate: Coordinate;
    address: string;
  };
  destinations: [{
    address: string;
    distance: {
      text: string;
      value: number;
    };
    duration: {
      text: string;
      value: number;
    };
  }]
}
