import {Injectable} from "@angular/core";
@Injectable()
export class UsersProvider {
    constructor() {}

    getUsers():Promise<any> {
        return new Promise((resolve) => {
            let data = [
                {id: 'id1'},
                {id: 'id2'},
                {id: 'id3'},
                {id: 'id4'},
                {id: 'id5'},
                {id: 'id6'},
                {id: 'id7'},
                {id: 'id8'},
                {id: 'id9'},
                {id: 'id10'},
            ];
            resolve(data);
        });
    }

    deleteUser(id):Promise<any> {
        return new Promise((resolve) => {
            resolve(true);
        });
    }
}

