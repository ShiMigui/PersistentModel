import { Persistent } from "./Persistent.js";
import { Author } from "./Author.js";
import { Guest } from "./Guest.js";

export class PublicationType extends Persistent {
    name = '';

    constructor({ id = 1, name = '' } = {}) {
        super({ id });
        this.name = name;
    }
}

export class Publication extends Persistent {
    title = '';
    type = null;
    description = '';

    author = null;
    sharedWith = [];

    constructor({ id = 1, title = '', description = '', type = null, sharedWith = [], author = null } = {}) {
        super({ id });
        this.type = type;
        this.title = title;
        this.description = description;
        this.author = new Author(author);
        this.sharedWith = sharedWith.map(o => new Guest(o));
    }
}