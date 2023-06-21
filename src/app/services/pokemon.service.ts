import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemon: any;
  numberOfPokemon: number = 151;
  constructor(private httpClient: HttpClient) {
    this.getPokemon();
  }

  async getPokemon(): Promise<void> {
    const { results } = await lastValueFrom(this.httpClient.get<{ results: Object[] }>(`https://pokeapi.co/api/v2/pokemon?limit=${this.numberOfPokemon}`));
    this.pokemon = results;
  }
}
