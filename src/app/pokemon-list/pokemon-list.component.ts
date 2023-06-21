import { Component } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})
export class PokemonListComponent {

  pokemons = ['Bulbasaur', 'Ivysaur', 'Venosaur'];
  
  constructor(public PokemonService: PokemonService) {}
}
