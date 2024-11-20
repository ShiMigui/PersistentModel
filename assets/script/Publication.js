import { Divulgation } from "./Divulgation.js";
import { PersistentModel } from "./PersistentModel.js";

export class PublicationType extends PersistentModel {
    name = '';

    constructor({ id = 1, name = '' } = {}) {
        super({ id });
        this.name = name;
    }
}

export class Publication extends PersistentModel {
    title = '';
    type = null;
    description = '';

    sharedWith = [];

    constructor({ id = 1, title = '', description = '', type = null, sharedWith = [] } = {}) {
        super({ id });
        this.title = title;
        this.description = description;
        this.type = type || new PublicationType({id: 1, name: 'None'});
        this.sharedWith = sharedWith.map(o => new Divulgation(o));
    }
}