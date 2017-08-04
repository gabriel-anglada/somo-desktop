import { Component } from '@angular/core';
import {ModalComponent} from "../../components/modal.component";

@Component({
  selector: 'contact-modal',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.scss']
})
export class ContactComponent extends ModalComponent{
  constructor() {
    super();
  }
}