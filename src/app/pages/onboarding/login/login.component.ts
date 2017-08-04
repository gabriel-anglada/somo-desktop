import { Component } from '@angular/core';
import {AlertProvider} from "../../../providers/alert";

@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent {
  constructor(private alertProvider: AlertProvider) {}
}
