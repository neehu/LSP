import { TestBed, inject } from '@angular/core/testing';

import { LetsShopService } from './lets-shop.service';

describe('LetsShopService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LetsShopService]
    });
  });

  it('should be created', inject([LetsShopService], (service: LetsShopService) => {
    expect(service).toBeTruthy();
  }));
});
