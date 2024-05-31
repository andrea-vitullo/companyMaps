import { faker } from "@faker-js/faker";

export class User {
    firstName: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.firstName = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
    };

    markerContent(): string {
        return `
        <div>
        <h1>User Name: ${this.firstName}</h1>
        </div>
        `;
    }
}
