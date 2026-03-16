import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Linked } from './linked';

describe('Linked', () => {
  let component: Linked;
  let fixture: ComponentFixture<Linked>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Linked],
    }).compileComponents();

    fixture = TestBed.createComponent(Linked);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
