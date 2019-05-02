import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiInputComponent } from './bmi-input.component';

describe('BmiInputComponent', () => {
  let component: BmiInputComponent;
  let fixture: ComponentFixture<BmiInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmiInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmiInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
