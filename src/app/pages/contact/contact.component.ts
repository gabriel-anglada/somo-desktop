import { Component } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.scss']
})
export class ContactComponent {
  constructor(public activeModal: NgbActiveModal) {}
}
