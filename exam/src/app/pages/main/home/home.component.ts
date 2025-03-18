import { AutofillMonitor } from '@angular/cdk/text-field';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PokedexService } from 'src/app/services/pokedex/pokedex.service';
import { UtilService } from 'src/app/services/util/util.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit {
  items: any

  @ViewChild('search', { read: ElementRef }) firstName: ElementRef<HTMLElement> | undefined;
  firstNameAutofilled: boolean | undefined;
 
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

      this.items = Array.from({ length: this.pokedexSrvc.pokemons.length }).map((_, i) => this.pokedexSrvc.pokemons[i]);


    } catch (e: any) {
      this.utilSrvc.navLoaded.next(true)
    }
  }



  ngAfterViewInit() {
    this._autofill
      .monitor(this.firstName!)
      .subscribe(e => (this.firstNameAutofilled = e.isAutofilled));

  }

  ngOnDestroy() {
    this._autofill.stopMonitoring(this.firstName!);
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

  keyUp(e: any) {
    console.log(e)
  }


}
