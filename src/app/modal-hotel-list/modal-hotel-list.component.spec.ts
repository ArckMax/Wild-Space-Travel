import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalHotelListComponent } from './modal-hotel-list.component';

describe('ModalHotelListComponent', () => {
  let component: ModalHotelListComponent;
  let fixture: ComponentFixture<ModalHotelListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalHotelListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalHotelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
