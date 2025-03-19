

// interfaces from pokemon api, whats here is not the all keys but only i put those what i need only
import { sprites } from "./pokemonCharacteristics.interface"

export interface pokemons {
    name: string,
    url: string,
}

export interface initPokemons {
    count: any,
    next: any,
    results: pokemons[]

}

export interface pokemonDetails {

    sprites: sprites

}
