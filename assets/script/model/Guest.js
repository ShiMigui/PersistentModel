import { Persistent } from "./Persistent.js";

export class Guest extends Persistent {
    name = '';
    email = '';

    constructor({ id = 1, name = '', email = '' } = {}) {
        super({ id });
        this.name = name;
        this.email = email;
    }
}