// pokemon-list.component.ts
import { Component, OnInit } from '@angular/core';
import { PokemonNamesService } from '../pokemon-names.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: 'pokemon-list.component.html',
})
export class PokemonListComponent implements OnInit {
  pokemonList: any[] = [];

  constructor(private PokemonNamesService: PokemonNamesService) {}

  ngOnInit(): void {
    this.loadPokemonList();
  }

  loadNextPage(): void {
    this.PokemonNamesService.loadNextPage().subscribe(response => {
      this.pokemonList = response.results;
    });
 }
 loadPrevPage():void{
  this.PokemonNamesService.loadPrevPage().subscribe(response => {
    this.pokemonList = response.results;
  });
 }
 loadPokemonList(): void {
  this.PokemonNamesService.getAllPokemon().subscribe((data) => {
    this.pokemonList = data.results;
  });
}
}
