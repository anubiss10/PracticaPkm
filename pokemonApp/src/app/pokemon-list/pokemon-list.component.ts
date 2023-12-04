// pokemon-list.component.ts
import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  template: `
    <h2>List of Pokémon</h2>
    <ul>
      <li *ngFor="let pokemon of pokemonList">
        {{ pokemon.name }}
      </li>
    </ul>
  `,
})
export class PokemonListComponent implements OnInit {
  pokemonList: any[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.loadPokemonList();
  }

  loadPokemonList(): void {
    this.pokemonService.getAllPokemon().subscribe((data) => {
      this.pokemonList = data.results;
    });
  }
}
