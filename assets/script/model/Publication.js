import { Persistent } from "./Persistent.js";
import { Author } from "./Author.js";
import { Guest } from "./Guest.js";
import formatDate from "../formatDate.js";

export class PublicationType extends Persistent {
    name = '';

    constructor({ id = 1, name = '' } = {}) {
        super({ id });
        this.name = name;
    }
}

export class Publication extends Persistent {
    date = new Date();
    title = '';
    type = null;
    description = '';

    author = null;
    sharedWith = [];

    constructor({ id = 1, title = '', description = '', type = null, sharedWith = [], author = null, date = null } = {}) {
        super({ id });
        this.date = date;
        this.type = type;
        this.title = title;
        this.description = description;
        this.author = new Author(author);
        this.sharedWith = sharedWith.map(o => new Guest(o));
    }

    render() {
        return `
        <a class="publication" href="./publication.html?cd=${this.id}">
            <img src="./assets/image/p${this.id}.jpg" alt="${this.description}">
            <h4 class='title'>${this.title}</h4>
            <p class='description'>${formatDate(this.date)}</p>
        </a>
        `;
    }
}