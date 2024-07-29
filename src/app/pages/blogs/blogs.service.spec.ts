/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BlogsService } from './blogs.service';

describe('Service: Blogs', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlogsService]
    });
  });

  it('should ...', inject([BlogsService], (service: BlogsService) => {
    expect(service).toBeTruthy();
  }));
});
