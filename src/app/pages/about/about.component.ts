import { Component } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.scss']
})
export class AboutComponent {
  constructor(public activeModal: NgbActiveModal) {}
}