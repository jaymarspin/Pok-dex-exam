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
