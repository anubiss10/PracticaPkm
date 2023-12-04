import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
 providedIn: 'root'
})
export class PokemonNamesService {
 private apiUrl = 'https://pokeapi.co/api/v2';
 private offset: number = 0;
 private limit: number = 20;

 constructor(private http: HttpClient) { }

 loadNextPage(): Observable<any> {
    this.offset += this.limit;
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=${this.limit}&offset=${this.offset}`);
 }

 loadPrevPage():Observable<any>{
    this.offset -= this.limit;
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=${this.limit
    }&offset=${this.offset}`) ;
 }
 getAllPokemon(): Observable<any> {
  return this.http.get(`${this.apiUrl}/pokemon`);
}
}