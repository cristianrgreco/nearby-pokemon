import { Component, OnInit } from '@angular/core';
import { PokemonService } from './pokemon/pokemon.service';
import { Pokemon } from './shared';

@Component({
  moduleId: module.id,
  selector: 'nearby-pokemon-app',
  templateUrl: 'nearby-pokemon.component.html',
  providers: [PokemonService]
})
export class NearbyPokemonAppComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    const latitude: number = 51.497121994573;
    const longitude: number = -0.12494802474976;

    this.pokemonService.fetchPokemon(latitude, longitude).subscribe((pokemon: Pokemon[]) => console.log(pokemon));
  }
}
