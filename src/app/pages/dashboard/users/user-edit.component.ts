import {Component} from '@angular/core';
import {UsersProvider} from "../../../providers/users";
import {AlertProvider} from "../../../providers/alert";
import {OrganizationsProvider} from "../../../providers/organizations";
import {UserAddModalComponent} from "./user-add.component";

@Component({
    selector: 'user-edit-modal',
    templateUrl: 'user-edit.component.html'
})
export class UserEditModalComponent extends UserAddModalComponent{

    private user;

    constructor(public usersProvider: UsersProvider,
                public alertProvider: AlertProvider,
                public organizationsProvider: OrganizationsProvider) {
        super(usersProvider, alertProvider, organizationsProvider);
    }

    setUser(user){
        this.user = user;

        this.form.controls.identifier.setValue(this.user.identifier);
        this.form.controls.headquarters.setValue(this.user.headquarter);
    }

    onSubmit() {
        this.usersProvider.updateUser(this.user.id, this.form.value).then(user => {
            this.alertProvider.showAlert({
                message: 'alert.success.user_updated_%userId%',
                messageParams: {userId:user.identifier},
                type: 'success'
            });

            this.afterSubmit();
        });
    }
}
