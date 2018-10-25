import { Component, OnInit, TemplateRef  } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';



@Component({
  selector: 'app-modal-hotel-list',
  templateUrl: './modal-hotel-list.component.html',
  styleUrls: ['./modal-hotel-list.component.css']
})

export class ModalHotelListComponent implements OnInit {
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }
''
}
