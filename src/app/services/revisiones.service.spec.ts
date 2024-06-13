import { TestBed } from '@angular/core/testing';

import { RevisionesService } from './revisiones.service';

describe('RevisionesService', () => {
  let service: RevisionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RevisionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
