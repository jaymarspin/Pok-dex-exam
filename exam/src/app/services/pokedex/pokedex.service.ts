import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { initPokemons, pokemonDetails, pokemons } from 'src/app/interfaces/pokemons.interface';
@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  server = environment.serverBase

  table1 = 'pokemon'


  pokemons!: pokemons[]
  pokemonsClone!: pokemons[]

  offset = 0
  length = 1000
  constructor(private http: HttpClient) { }


  public getPokemons() {
    return this.http
      .get(`${this.server}${this.table1}?limit=${this.length}&offset=${this.offset}`)
      .pipe(map((response) => response as initPokemons));
  }


  public getPokemon(url: string) {
    return this.http
      .get(`${url}`)
      .pipe(map((response) => response as pokemonDetails));
  }


}
