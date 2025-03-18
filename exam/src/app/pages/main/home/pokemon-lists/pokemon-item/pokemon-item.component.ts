import { CdkOverlayOrigin, FlexibleConnectedPositionStrategyOrigin } from '@angular/cdk/overlay';
import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { pokemonDetails, pokemons } from 'src/app/interfaces/pokemons.interface';
import { PokedexService } from 'src/app/services/pokedex/pokedex.service';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss'], 
})
export class PokemonItemComponent implements OnInit {
  @Input() pokemon!: pokemons

  @ViewChild('origin') origin!: ElementRef;
  isOpen = false;
  pokemonDetails!: pokemonDetails 
  constructor(public pokedexSrvc: PokedexService,) { }

  async ngOnInit(): Promise<void> {

    this.pokemonDetails = await this.init() 

  }

  init(): Promise<any> {
    return new Promise(resolve => {
      this.pokedexSrvc.getPokemon(this.pokemon.url).subscribe({
        next: response => resolve(response)
      })
    })
  }

}
