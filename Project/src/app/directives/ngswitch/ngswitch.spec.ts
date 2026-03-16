import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngswitch } from './ngswitch';

describe('Ngswitch', () => {
  let component: Ngswitch;
  let fixture: ComponentFixture<Ngswitch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ngswitch],
    }).compileComponents();

    fixture = TestBed.createComponent(Ngswitch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
