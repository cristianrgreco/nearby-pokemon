import { Component, OnInit } from '@angular/core';
import { PokemonService } from './pokemon/pokemon.service';
import { Pokemon } from './shared';
import { LocationService } from './location/location.service';
import { Coordinate } from './shared/coordinate';
import { GoogleMapsService } from './google-maps/google-maps.service';
import { Distance } from './shared/distance';

@Component({
  moduleId: module.id,
  selector: 'nearby-pokemon-app',
  templateUrl: 'app.component.html',
  providers: [PokemonService, LocationService, GoogleMapsService]
})
export class AppComponent implements OnInit {

  constructor(
    private pokemonService: PokemonService,
    private locationService: LocationService,
    private googleMapsService: GoogleMapsService) { }

  ngOnInit() {
    const latitude: number = 51.497121994573;
    const longitude: number = -0.12494802474976;

    this.pokemonService.fetchPokemon(latitude, longitude).subscribe((pokemon: Pokemon[]) => console.log(pokemon));
    this.locationService.getCurrentPosition().subscribe((coords: Coordinate) => console.log(coords));
    this.googleMapsService.fetchDistances(
      {
        latitude: 51.520229799999996,
        longitude: -0.1225594
      },
      [
        {
          latitude: 51.51826530907,
          longitude: -0.12724319528427
        },
        {
          latitude: 51.518840261538,
          longitude: -0.12724581660496
        }
      ]
    ).subscribe((distances: Distance) => console.log(distances));
  }
}
