import { Component } from '@angular/core';
import {StarsProvider} from "../../../providers/stars";

@Component({
  selector: 'stars',
  templateUrl: 'stars.component.html',
  styleUrls: ['stars.component.scss']
})
export class StarsComponent {
  private stars;

  constructor(private starsProvider: StarsProvider) {}

  ngOnInit(){
    this.starsProvider.getStars().then(stars => {
      this.stars = stars;
    })
  }
}
