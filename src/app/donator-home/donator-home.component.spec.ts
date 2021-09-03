import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonatorHomeComponent } from './donator-home.component';

describe('DonatorHomeComponent', () => {
  let component: DonatorHomeComponent;
  let fixture: ComponentFixture<DonatorHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonatorHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonatorHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
