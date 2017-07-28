import {Injectable} from "@angular/core";

@Injectable()
export class StarsProvider {
    constructor() {}

    getStars():Promise<any> {
        return new Promise((resolve) => {
            let data = [
                {id: 'id_star1'},
                {id: 'id_star2'},
                {id: 'id_star3'}
            ];
            resolve(data);
        });
    }
}

