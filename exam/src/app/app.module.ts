import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './shared/nav/nav.component';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { MainComponent } from './pages/main/main.component';
import { HomeComponent } from './pages/main/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { PokedexService } from './services/pokedex/pokedex.service';
import { UtilService } from './services/util/util.service';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { PokemonListsComponent } from './pages/main/home/pokemon-lists/pokemon-lists.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    HomeComponent,
    PokemonListsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    ScrollingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PokedexService, UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
