import {Component} from '@angular/core';
import {FormGroup, Validators, FormControl} from "@angular/forms";
import {ModalFormComponent} from "../../../components/modal-form.component";
import {UsersProvider} from "../../../providers/users";
import {AlertProvider} from "../../../providers/alert";
import {OrganizationsProvider} from "../../../providers/organizations";

@Component({
    selector: 'user-add-modal',
    templateUrl: 'user-add.component.html'
})
export class UserAddModalComponent extends ModalFormComponent{

    public headquarters;

    constructor(public usersProvider: UsersProvider,
                public alertProvider: AlertProvider,
                public organizationsProvider: OrganizationsProvider) {
        super();

        this.form = new FormGroup({
            identifier: new FormControl('', Validators.required),
            headquarters: new FormControl('', Validators.required)
        });
    }

    initUser(){
        
    }

    open(){
        this.organizationsProvider.getOrganizationHeadquarters('').then(headquarters => {
            this.headquarters = headquarters;

            super.open();
        })
    }

    onSubmit() {
        this.usersProvider.createUser(this.form.value).then(user => {
            this.alertProvider.showAlert({
                message: 'alert.success.user_added_%userId%',
                messageParams: {userId:user.identifier},
                type: 'success'
            });

            super.afterSubmit();
        });
    }
}
