import {Component} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {ModalComponent} from "./modal.component";

@Component({
    selector: 'modal-form',
    templateUrl: 'modal-form.component.html'
})
export class ModalFormComponent extends ModalComponent{

    public form:FormGroup;
    public submitted = false;

    constructor() {
        super();
    }

    open(){
        super.open();
    }

    onSubmit() {
        //@To implement by children
        console.log('submit');
    }

    afterSubmit(){
        this.form.reset();
        this.submitted = false;
        this.close();
    }
}
