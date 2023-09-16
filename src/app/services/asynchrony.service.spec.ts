import { TestBed } from '@angular/core/testing';

import { AsynchronyService } from './asynchrony.service';

describe('AsynchronyService', () => {
  let service: AsynchronyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsynchronyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
