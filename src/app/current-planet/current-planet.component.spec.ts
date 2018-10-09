import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentPlanetComponent } from './current-planet.component';

describe('CurrentPlanetComponent', () => {
  let component: CurrentPlanetComponent;
  let fixture: ComponentFixture<CurrentPlanetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentPlanetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentPlanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
