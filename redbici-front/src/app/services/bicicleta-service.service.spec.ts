import { TestBed } from '@angular/core/testing';

import { BicicletaServiceService } from './bicicleta-service.service';

describe('BicicletaServiceService', () => {
  let service: BicicletaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BicicletaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
