import { PersistentModel } from "./PersistentModel.js";

export class Guest extends PersistentModel {
    name = '';
    email = '';

    constructor({ id = 1, name = '', email = '' } = {}) {
        super({ id });
        this.name = name;
        this.email = email;
    }
}

export class Divulgation extends PersistentModel {
    guests = [];

    constructor({ id = 1, guests = [] } = {}) {
        super({ id });
        this.guests = guests.map(g => new Guest(g));
    }
}