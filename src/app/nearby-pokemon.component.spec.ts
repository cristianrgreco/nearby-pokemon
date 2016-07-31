import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { NearbyPokemonAppComponent } from '../app/nearby-pokemon.component';

beforeEachProviders(() => [NearbyPokemonAppComponent]);

describe('App: NearbyPokemon', () => {
  it('should create the app',
      inject([NearbyPokemonAppComponent], (app: NearbyPokemonAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'nearby-pokemon works!\'',
      inject([NearbyPokemonAppComponent], (app: NearbyPokemonAppComponent) => {
    expect(app.title).toEqual('nearby-pokemon works!');
  }));
});
