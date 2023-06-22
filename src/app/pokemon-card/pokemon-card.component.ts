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

  capitalize(word: string): string {
    return  word.charAt(0).toUpperCase() + word.slice(1);
  }

  getPokemonImage(): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.id}.png`;
  }
}
