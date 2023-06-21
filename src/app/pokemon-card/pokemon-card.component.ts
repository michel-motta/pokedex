import { Component, Input } from '@angular/core';
import { Pokemon } from '../interfaces/Pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass']
})
export class PokemonCardComponent {
  @Input()
  pokemon!: Pokemon;
  @Input()
  id!: number;

  getPokemonImage(): string {
    return `https://img.pokemondb.net/artwork/original/${this.pokemon.name}-gen1-jp.jpg`;
  }
}
