import {Injectable} from "@angular/core";
@Injectable()
export class OrganizationsProvider {
    public organization;

    constructor() {}

    getOrganization():Promise<any> {
        return new Promise((resolve) => {
            let data = {
                identifier: 'id1'
            };
            this.organization = data;

            resolve(this.organization);
        });
    }

    createOrganization(data):Promise<any> {
        return new Promise((resolve) => {
            this.organization = data;

            resolve(data);
        });
    }

    updateOrganization(id, data):Promise<any> {
        return new Promise((resolve) => {
            resolve(data);
        });
    }

    deleteOrganization(id):Promise<any> {
        return new Promise((resolve) => {
            resolve(true);
        });
    }

    getOrganizationHeadquarters(organizationId):Promise<any> {
        return new Promise((resolve) => {
            let data = [
                {id: 'sede1', name: 'Sede 1'},
                {id: 'sede2', name: 'Sede 2'},
                {id: 'sede3', name: 'Sede 3'}
            ];

            resolve(data);
        });
    }
}

