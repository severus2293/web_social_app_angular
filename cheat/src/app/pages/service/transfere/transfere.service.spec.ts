import { TestBed } from '@angular/core/testing';

import { TransfereService } from './transfere.service';

describe('TransfereService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransfereService = TestBed.get(TransfereService);
    expect(service).toBeTruthy();
  });
});
