import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NGOMemberComponent } from './ngo-member.component';

describe('NGOMemberComponent', () => {
  let component: NGOMemberComponent;
  let fixture: ComponentFixture<NGOMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NGOMemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NGOMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
