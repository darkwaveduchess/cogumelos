import { TestBed } from '@angular/core/testing';

import { CogumeloService } from '../_services/cogumelo.service';

describe('CogumeloService', () => {
  let service: CogumeloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CogumeloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
