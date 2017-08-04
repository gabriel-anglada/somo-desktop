import {Component} from '@angular/core';
import {FormGroup, Validators, FormControl} from "@angular/forms";
import {ModalFormComponent} from "../../../components/modal-form.component";
import {StarsProvider} from "../../../providers/stars";
import {AlertProvider} from "../../../providers/alert";
import {StarAddModalComponent} from "./star-add.component";

@Component({
    selector: 'star-edit-modal',
    templateUrl: 'star-edit.component.html'
})
export class StarEditModalComponent extends StarAddModalComponent{

    private star;

    constructor(public starsProvider: StarsProvider,
                public alertProvider: AlertProvider) {
        super(starsProvider, alertProvider);
    }

    setStar(star){
        this.star = star;

        this.form.controls.identifier.setValue(this.star.identifier);
        this.form.controls.name.setValue(this.star.name);
        this.form.controls.description.setValue(this.star.description);
        this.form.controls.frequency.setValue(this.star.frequency);
        this.form.controls.num_peaks.setValue(this.star.num_peaks);
        this.form.controls.num_answers.setValue(this.star.num_answers);
    }

    open(){
        super.open();
    }

    onSubmit() {
        this.starsProvider.updateStar(this.star.id, this.form.value).then(star => {
            this.alertProvider.showAlert({
                message: 'alert.success.star_updated_%starId%',
                messageParams: {starId:star.identifier},
                type: 'success'
            });

            this.afterSubmit();
        });
    }
}
