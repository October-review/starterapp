import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericpageComponent } from './genericpage.component';

describe('GenericpageComponent', () => {
  let component: GenericpageComponent;
  let fixture: ComponentFixture<GenericpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
