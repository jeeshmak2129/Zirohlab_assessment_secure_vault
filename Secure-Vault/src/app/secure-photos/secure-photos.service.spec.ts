import { TestBed } from '@angular/core/testing';

import { SecurePhotosService } from './secure-photos.service';

describe('SecurePhotosService', () => {
  let service: SecurePhotosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecurePhotosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
