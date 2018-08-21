import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTemplateFuzeComponent } from './angular-template-fuze.component';

describe('AngularTemplateFuzeComponent', () => {
  let component: AngularTemplateFuzeComponent;
  let fixture: ComponentFixture<AngularTemplateFuzeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularTemplateFuzeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularTemplateFuzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
