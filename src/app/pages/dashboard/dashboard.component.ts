import {Component, ViewChild} from '@angular/core';
import {AboutComponent} from "../about/about.component";
import {ContactComponent} from "../contact/contact.component";

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent {

  @ViewChild('aboutModal') aboutModal:AboutComponent;
  @ViewChild('contactModal') contactModal:ContactComponent;

  constructor() {}

   onAboutClick(){
     this.aboutModal.open();
   }

   onContactClick(){
     this.contactModal.open();
   }
}
