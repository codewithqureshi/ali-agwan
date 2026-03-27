import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testimoanl } from './testimoanl';

describe('Testimoanl', () => {
  let component: Testimoanl;
  let fixture: ComponentFixture<Testimoanl>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Testimoanl],
    }).compileComponents();

    fixture = TestBed.createComponent(Testimoanl);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
