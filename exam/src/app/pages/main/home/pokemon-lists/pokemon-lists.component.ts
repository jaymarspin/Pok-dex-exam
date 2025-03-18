import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
 

@Component({
  selector: 'app-pokemon-lists',
  templateUrl: './pokemon-lists.component.html',
  styleUrls: ['./pokemon-lists.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonListsComponent implements OnInit {
  @Input() items: any
  constructor() { }
  async ngOnInit(): Promise<void> {

  }


  

}
