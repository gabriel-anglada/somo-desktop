import {Injectable} from "@angular/core";
import {Observable, Observer} from "rxjs";

@Injectable()
export class AlertProvider {

    public showObservable:Observable<boolean>;
    private showObserver: Observer<any>;

    constructor() {
        this.showObservable = new Observable(observer => {
            this.showObserver = observer;
        })
    }

    showAlert(data:any):any {
        if(!data.time) data.time = 2000;
        if(!data.type) data.type = 'danger';

        this.showObserver.next(data);
        setTimeout(() => {
            this.showObserver.next(false);
        }, data.time);
    }
}

