import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/services/pokedex/pokedex.service';
 

@Component({
  selector: 'app-pokemon-lists',
  templateUrl: './pokemon-lists.component.html',
  styleUrls: ['./pokemon-lists.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonListsComponent implements OnInit {
  
  constructor(public pokedexSrvc: PokedexService) { }
  async ngOnInit(): Promise<void> {

  }


  

}
