import { Component } from '@angular/core';
import {ModalComponent} from "../../components/modal.component";

@Component({
  selector: 'about-modal',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.scss']
})
export class AboutComponent extends ModalComponent{
  constructor() {
    super();
  }
}