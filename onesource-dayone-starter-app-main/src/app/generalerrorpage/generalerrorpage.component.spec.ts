import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralerrorpageComponent } from './generalerrorpage.component';

describe('GeneralerrorpageComponent', () => {
  let component: GeneralerrorpageComponent;
  let fixture: ComponentFixture<GeneralerrorpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralerrorpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralerrorpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
