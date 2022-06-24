import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumerCounterComponent } from './numer-counter.component';

describe('NumerCounterComponent', () => {
  let component: NumerCounterComponent;
  let fixture: ComponentFixture<NumerCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumerCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumerCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
