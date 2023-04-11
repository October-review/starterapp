import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthorizedpageComponent } from './unauthorizedpage.component';

describe('UnauthorizedpageComponent', () => {
  let component: UnauthorizedpageComponent;
  let fixture: ComponentFixture<UnauthorizedpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnauthorizedpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnauthorizedpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
