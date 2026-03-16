import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngfor } from './ngfor';

describe('Ngfor', () => {
  let component: Ngfor;
  let fixture: ComponentFixture<Ngfor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ngfor],
    }).compileComponents();

    fixture = TestBed.createComponent(Ngfor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
