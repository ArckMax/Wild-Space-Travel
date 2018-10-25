import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodTravelComponent } from './good-travel.component';

describe('GoodTravelComponent', () => {
  let component: GoodTravelComponent;
  let fixture: ComponentFixture<GoodTravelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodTravelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
