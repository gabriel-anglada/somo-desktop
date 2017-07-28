import {Directive, Input, HostListener, Output, EventEmitter} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ConfirmComponent} from "./confirm.component";

@Directive({
    selector: '[confirm]',
})
export class ConfirmDirective {

    @Input() title: string;
    @Input() text: string;

    @Output('onConfirm') onConfirm:EventEmitter<string> = new EventEmitter<string>();
    private confirm;

    constructor(private modalService: NgbModal) {
        let self = this;

        this.confirm = function(){
            self.onConfirm.emit();
        }
    }

    @HostListener('click') onClick() {
        const modalRef = this.modalService.open(ConfirmComponent);
        modalRef.componentInstance.title = this.title;
        modalRef.componentInstance.text = this.text;
        modalRef.componentInstance.confirm = this.confirm;
    }


}
