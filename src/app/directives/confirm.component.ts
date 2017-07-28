import {Component, Input} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'confirm',
  templateUrl: 'confirm.component.html',
  //styleUrls: ['confirm.component.scss']
})
export class ConfirmComponent {
  @Input() title;
  @Input() text;

  constructor(public activeModal: NgbActiveModal) {}
}