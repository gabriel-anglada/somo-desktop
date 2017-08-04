import {Component} from '@angular/core';
import {FormGroup, Validators, FormControl} from "@angular/forms";
import {ModalFormComponent} from "../../../components/modal-form.component";
import {StarsProvider} from "../../../providers/stars";
import {AlertProvider} from "../../../providers/alert";

@Component({
    selector: 'star-add-modal',
    templateUrl: 'star-add.component.html'
})
export class StarAddModalComponent extends ModalFormComponent{

    public frequencies = StarsProvider.frequencies;
    public numPeaks = StarsProvider.numPeaks;
    public numAnswers = StarsProvider.numAnswers;

    constructor(public starsProvider: StarsProvider,
                public alertProvider: AlertProvider) {
        super();

        this.form = new FormGroup({
            identifier: new FormControl('', Validators.required),
            name: new FormControl('', Validators.required),
            description: new FormControl(''),
            frequency: new FormControl('', Validators.required),
            num_peaks: new FormControl('', Validators.required),
            num_answers: new FormControl('', Validators.required),
        });
    }

    initStar() {
        this.form.controls.frequency.setValue('quarterly');
        this.form.controls.num_peaks.setValue(8);
        this.form.controls.num_answers.setValue(8);
    }

    open(){
        super.open();
    }

    onSubmit() {
        this.starsProvider.createStar(this.form.value).then(star => {
            this.alertProvider.showAlert({
                message: 'alert.success.star_added_%starId%',
                messageParams: {starId:star.identifier},
                type: 'success'
            });

            super.afterSubmit();
        });
    }
}
