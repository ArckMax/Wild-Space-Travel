import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipchoiceComponent } from './shipchoice.component';

describe('ShipchoiceComponent', () => {
  let component: ShipchoiceComponent;
  let fixture: ComponentFixture<ShipchoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipchoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipchoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
