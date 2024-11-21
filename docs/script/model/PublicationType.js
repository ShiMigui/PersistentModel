import Persistent from "./Persistent.js";

export default class PublicationType extends Persistent {
    name = '';

    constructor({ id = 1, name = '' } = {}) {
        super({ id });
        this.name = name;
    }
}