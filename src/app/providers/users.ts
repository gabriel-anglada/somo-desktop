import {Injectable} from "@angular/core";
@Injectable()
export class UsersProvider {
    public users = [];

    constructor() {}

    getUsers():Promise<any> {
        return new Promise((resolve) => {
            let data = [
                {id: 'id1', identifier: 'ID1', headquarter: 'sede1'},
                {id: 'id2', identifier: 'ID2', headquarter: 'sede1'},
                {id: 'id3', identifier: 'ID3', headquarter: 'sede2'},
                {id: 'id4', identifier: 'ID4', headquarter: 'sede3'},
                {id: 'id5', identifier: 'ID5', headquarter: 'sede1'},
                {id: 'id6', identifier: 'ID6', headquarter: 'sede3'},
                {id: 'id7', identifier: 'ID7', headquarter: 'sede1'}
            ];
            this.users = data;

            resolve(this.users);
        });
    }

    createUser(data):Promise<any> {
        return new Promise((resolve) => {
            this.users.push(data);

            resolve(data);
        });
    }

    updateUser(id, data):Promise<any> {
        return new Promise((resolve) => {
            resolve(data);
        });
    }

    deleteUser(id):Promise<any> {
        return new Promise((resolve) => {
            resolve(true);
        });
    }
}

