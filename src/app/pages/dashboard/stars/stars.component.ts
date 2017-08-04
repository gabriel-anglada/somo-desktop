import {Component, ViewChild} from '@angular/core';
import {StarsProvider} from "../../../providers/stars";
import {AlertProvider} from "../../../providers/alert";
import {StarAddModalComponent} from "./star-add.component";
import {StarEditModalComponent} from "./star-edit.component";

@Component({
  selector: 'stars',
  templateUrl: 'stars.component.html',
  styleUrls: ['stars.component.scss']
})
export class StarsComponent {
  private stars = [];

  @ViewChild('starAddModal') starAddModal:StarAddModalComponent;
  @ViewChild('starEditModal') stareditModal:StarEditModalComponent;

  constructor(private starsProvider: StarsProvider,
              private alertProvider: AlertProvider) {}

  ngOnInit(){
    this.starsProvider.getStars().then(stars => {
      this.stars = stars;
    })
  }

  onAddStar(){
    this.starAddModal.initStar();
    this.starAddModal.open();
  }

  onEditStar(star){
    this.stareditModal.setStar(star);
    this.stareditModal.open();
  }

  onDeleteStar(star){
    this.starsProvider.deleteStar(star.identifier).then(() => {
      this.alertProvider.showAlert({
        message: 'alert.success.star_deleted_%starId%',
        messageParams: {starId:star.identifier},
        type: 'success'
      });
    })
  }
}
