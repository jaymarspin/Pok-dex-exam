import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { initPokemons, pokemons } from 'src/app/interfaces/pokemons.interface';
@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  server = environment.serverBase

  table1 = 'pokemon'


  pokemons!: pokemons[]
  constructor(private http: HttpClient) { }


  public getPokemons() {

    return this.http
      .get(`${this.server}${this.table1}?limit=100000&offset=0.`)
      .pipe(map((response) => response as initPokemons));
  }

}
