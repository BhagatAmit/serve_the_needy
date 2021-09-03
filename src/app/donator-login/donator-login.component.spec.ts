import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonatorLoginComponent } from './donator-login.component';

describe('DonatorLoginComponent', () => {
  let component: DonatorLoginComponent;
  let fixture: ComponentFixture<DonatorLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonatorLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonatorLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
