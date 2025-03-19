import { AutofillMonitor } from '@angular/cdk/text-field';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PokedexService } from 'src/app/services/pokedex/pokedex.service';
import { UtilService } from 'src/app/services/util/util.service';

import * as smartArrayFilter from 'smart-array-filter'
import { pokemons } from 'src/app/interfaces/pokemons.interface';
import * as _ from 'lodash'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit {
  items: any

  @ViewChild('search', { read: ElementRef }) search: ElementRef<HTMLElement> | undefined;
  searchAutoFill: boolean | undefined;

  searchForm!: FormGroup;
  constructor(private _autofill: AutofillMonitor, public pokedexSrvc: PokedexService, private utilSrvc: UtilService, private fb: FormBuilder) { }

  async ngOnInit(): Promise<void> {

    this.searchForm = this.fb.group({
      search: ['', Validators.required],

    });
    try {
      const x = await this.init()

      this.utilSrvc.navLoaded.next(true)

      this.pokedexSrvc.pokemons = x.results

      this.pokedexSrvc.pokemons = Array.from({ length: this.pokedexSrvc.pokemons.length }).map((_, i) => this.pokedexSrvc.pokemons[i]);

      this.pokedexSrvc.pokemonsClone = _.cloneDeep(this.pokedexSrvc.pokemons)


    } catch (e: any) {
      this.utilSrvc.navLoaded.next(true)
    }
  }



  searching(e?: any) {

    //removes the current value of pokemon array
    this.pokedexSrvc.pokemons = undefined as unknown as pokemons[]

    //crawling through the array looking for possilbe matches of keywords from search value
    const filteredData = smartArrayFilter.filter(this.pokedexSrvc.pokemonsClone, {
      keywords: `${this.searchForm.controls['search'].value.trim()}`,
    });

    //assigning the filtered value from search crawl
    this.pokedexSrvc.pokemons = filteredData
  }


  ngAfterViewInit() {
    this._autofill
      .monitor(this.search!)
      .subscribe(e => (this.searchAutoFill = e.isAutofilled));

  }

  ngOnDestroy() {
    this._autofill.stopMonitoring(this.search!);
  }

  init(): Promise<any> {
    return new Promise(resolve => {
      this.pokedexSrvc.getPokemons().subscribe({
        next: response => resolve(response),
        error: err => resolve(err)
      },

      )
    })
  }


  //listen for keyboard event waiting for enter to be pressed then triggers the search method above 
  keyUp(e: any) {

    if (e.keyCode === 13) {
      this.searching()
    }
  }


}
