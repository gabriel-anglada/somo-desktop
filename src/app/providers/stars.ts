import {Injectable} from "@angular/core";

@Injectable()
export class StarsProvider {
    public stars = [];

    static numPeaks = [3,4,5,6,7,8,9,10,11,12,13,14,15];
    static numAnswers = [3,4,5,6,7,8,9,10,11,12,13,14,15];
    static frequencies = ['weekly', 'monthly', 'quarterly', 'semiannual'];

    constructor() {}

    getStars():Promise<any> {
        return new Promise((resolve) => {
            let data = [
                {id: 'id1', identifier: 'ID1', name: 'Estrella 1', description: 'Descripción 1', frequency: 'weekly', num_peaks:8, num_answers:6},
                {id: 'id2', identifier: 'ID2', name: 'Estrella 2', description: 'Descripción 2', frequency: 'quarterly', num_peaks:7, num_answers:10},
                {id: 'id3', identifier: 'ID3', name: 'Estrella 3', description: 'Descripción 3', frequency: 'monthly', num_peaks:10, num_answers:4},
                {id: 'id4', identifier: 'ID4', name: 'Estrella 4', description: 'Descripción 4', frequency: 'semiannual', num_peaks:4, num_answers:8}
            ];
            this.stars = data;

            resolve(this.stars);
        });
    }

    createStar(data):Promise<any> {
        return new Promise((resolve) => {
            this.stars.push(data);

            resolve(data);
        });
    }

    updateStar(id, data):Promise<any> {
        return new Promise((resolve) => {
            resolve(data);
        });
    }

    deleteStar(id):Promise<any> {
        return new Promise((resolve) => {
            resolve(true);
        });
    }
}

