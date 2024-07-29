/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WelcomeService } from './welcome.service';

describe('Service: Welcome', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WelcomeService]
    });
  });

  it('should ...', inject([WelcomeService], (service: WelcomeService) => {
    expect(service).toBeTruthy();
  }));
});
