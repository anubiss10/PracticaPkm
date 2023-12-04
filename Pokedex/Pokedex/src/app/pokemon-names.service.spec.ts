import { TestBed } from '@angular/core/testing';

import { PokemonNamesService } from './pokemon-names.service';

describe('PokemonNamesService', () => {
  let service: PokemonNamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonNamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
