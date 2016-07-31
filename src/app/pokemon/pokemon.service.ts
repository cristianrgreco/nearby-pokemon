import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Pokemon } from '../shared';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class PokemonService {

  private static api: string = 'https://pokemon-go-rest-api.herokuapp.com';

  constructor(private http: Http) { }

  fetchPokemon(latitude: number, longitude: number): Observable<Pokemon[]> {
    return this.http.get(`${PokemonService.api}/?latitude=${latitude}&longitude=${longitude}`)
      .map((res: Response) => res.json() as Pokemon[]);
  }
}
