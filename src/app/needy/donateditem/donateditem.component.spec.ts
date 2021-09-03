import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateditemComponent } from './donateditem.component';

describe('DonateditemComponent', () => {
  let component: DonateditemComponent;
  let fixture: ComponentFixture<DonateditemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonateditemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonateditemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
