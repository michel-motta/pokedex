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
  idFormatted!: string;

  getPokemonImage(): string {
     this.idFormatted = this.leadingZero(this.id);
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${this.idFormatted}.png`;
  }

  private leadingZero(str: string | number, size = 3): string {
    let s = String(str);
    while (s.length < (size || 2)) {
      s = '0' + s;
    }
    return s;
  }
}
