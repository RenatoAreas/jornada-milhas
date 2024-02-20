import { TestBed } from '@angular/core/testing';

import { UnidadesFederaisService } from './unidades-federais.service';

describe('UnidadesFederaisService', () => {
  let service: UnidadesFederaisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnidadesFederaisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
