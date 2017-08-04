import {Component, HostListener} from '@angular/core';

@Component({
    selector: 'modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
    public opened = false;

    constructor() {}

    open(){
        this.opened = true;
    }

    close(){
        this.opened = false;
    }
}
