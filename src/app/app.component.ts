import { Component } from '@angular/core';
import {AlertProvider} from "./providers/alert";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private alerts = [];

  constructor(private alertProvider:AlertProvider) {

    /**
     * @TODO move this to a directive
     */
    alertProvider.showObservable.subscribe((value:any) => {
      if(value) {
        this.alerts.push(value);
      } else {
        this.alerts.shift();
      }
    })
  }
}
