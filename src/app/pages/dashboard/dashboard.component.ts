import { Component } from '@angular/core';
import {AboutComponent} from "../about/about.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ContactComponent} from "../contact/contact.component";

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private modalService: NgbModal) {}

  onAboutClick(){
    this.modalService.open(AboutComponent);
  }

  onContactClick(){
    this.modalService.open(ContactComponent);
  }
}
