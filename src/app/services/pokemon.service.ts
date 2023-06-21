import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Pokemon } from '../interfaces/Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemon: Pokemon[] = [];
  numberOfPokemon: number = 151;

  constructor(private httpClient: HttpClient) {
    this.getAllPokemon();
  }

  async getAllPokemon(): Promise<void> {
    const { results } = await lastValueFrom(this.httpClient.get<{ results: Pokemon[] }>(`https://pokeapi.co/api/v2/pokemon?limit=${this.numberOfPokemon}`));
    this.pokemon = results;
  }

  async getPokemon(pokemonName: string): Promise<Pokemon> {
    return await lastValueFrom(this.httpClient.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`));
  }
}
