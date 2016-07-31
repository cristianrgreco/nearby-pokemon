import { Component, OnInit } from '@angular/core';
import { PokemonService } from './pokemon/pokemon.service';
import { Pokemon } from './shared';
import {LocationService} from './location/location.service';
import {Coordinate} from './shared/coordinate';

@Component({
  moduleId: module.id,
  selector: 'nearby-pokemon-app',
  templateUrl: 'nearby-pokemon.component.html',
  providers: [PokemonService, LocationService]
})
export class NearbyPokemonAppComponent implements OnInit {

  constructor(private pokemonService: PokemonService, private locationService: LocationService) { }

  ngOnInit() {
    const latitude: number = 51.497121994573;
    const longitude: number = -0.12494802474976;

    this.pokemonService.fetchPokemon(latitude, longitude).subscribe((pokemon: Pokemon[]) => console.log(pokemon));
    this.locationService.getCurrentPosition().subscribe((coords: Coordinate) => console.log(coords));
  }
}
