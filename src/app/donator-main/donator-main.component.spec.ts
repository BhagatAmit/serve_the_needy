import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonatorMainComponent } from './donator-main.component';

describe('DonatorMainComponent', () => {
  let component: DonatorMainComponent;
  let fixture: ComponentFixture<DonatorMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonatorMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonatorMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
