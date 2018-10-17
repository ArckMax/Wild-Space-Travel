import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetchoiceComponent } from './planetchoice.component';

describe('PlanetchoiceComponent', () => {
  let component: PlanetchoiceComponent;
  let fixture: ComponentFixture<PlanetchoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetchoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetchoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
