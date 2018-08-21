import { TestBed, inject } from '@angular/core/testing';

import { AngularTemplateFuzeService } from './angular-template-fuze.service';

describe('AngularTemplateFuzeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngularTemplateFuzeService]
    });
  });

  it('should be created', inject([AngularTemplateFuzeService], (service: AngularTemplateFuzeService) => {
    expect(service).toBeTruthy();
  }));
});
