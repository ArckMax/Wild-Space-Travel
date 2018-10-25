import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendPlaneteComponent } from './trend-planete.component';

describe('TrendPlaneteComponent', () => {
  let component: TrendPlaneteComponent;
  let fixture: ComponentFixture<TrendPlaneteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendPlaneteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendPlaneteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
