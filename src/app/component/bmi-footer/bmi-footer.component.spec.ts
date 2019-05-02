import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiFooterComponent } from './bmi-footer.component';

describe('BmiFooterComponent', () => {
  let component: BmiFooterComponent;
  let fixture: ComponentFixture<BmiFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmiFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmiFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
