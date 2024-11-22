import formatDate from "../func/formatDate.js";
import PublicationType from "./PublicationType.js";
import Persistent from "./Persistent.js";
import Author from "./Author.js";
import Guest from "./Guest.js";

/**
 * @class Publication
 * @extends Persistent
 * @classdesc Represents a publication with details such as title, date, type, description, author, and shared recipients.
 */
export default class Publication extends Persistent {
    /**
     * The title of the publication.
     * @type {string}
     * @default ''
     */
    title = '';

    /**
     * The publication date.
     * @type {Date|null}
     * @default null
     */
    date = null;

    /**
     * The type of the publication.
     * @type {PublicationType|null}
     * @default null
     */
    type = null;

    /**
     * A brief description of the publication.
     * @type {string}
     * @default ''
     */
    description = '';

    /**
     * The author of the publication.
     * @type {Author|null}
     * @default null
     */
    author = null;

    /**
     * A list of guests with whom the publication is shared.
     * @type {Guest[]}
     * @default []
     */
    sharedWith = [];

    /**
     * Constructs a new Publication instance.
     * 
     * @constructor
     * @param {Object} [options={}] - The configuration object for the publication.
     * @param {number} [options.id] - The unique ID for the publication.
     * @param {string} [options.title] - The title of the publication.
     * @param {string} [options.description] - The description of the publication.
     * @param {Object} [options.type] - The type of the publication, converted to a `PublicationType` instance.
     * @param {Object[]} [options.sharedWith] - An array of guests, converted to `Guest` instances.
     * @param {Object} [options.author] - The author of the publication, converted to an `Author` instance.
     * @param {string} [options.date] - The publication date, converted to a `Date` object.
     */
    constructor({ id, title, description, type, sharedWith, author, date } = {}) {
        super({ id });
        this.title = title;
        this.date = new Date(date);
        this.description = description;
        this.author = new Author(author);
        this.type = new PublicationType(type);
        this.sharedWith = sharedWith.map(o => new Guest(o));
    }

    /**
     * Renders the publication as an HTML string.
     * 
     * @returns {string} The HTML string representation of the publication.
     */
    render() {
        //./assets/image/p${this.id}.jpg
        /*
            Supposedly, in a CDN, the thumbnail should be larger for better quality. 
            However, to optimize network speed, it is kept smaller than 1920x1080. (in this case 800x450)
        */
        return `
        <a class="publication" href="./publication.html?cd=${this.id}">
            <img src="https://via.placeholder.com/800x450" alt="${this.description}">
            <h4 class='title'>${this.title}</h4>
            <p class='description'>${formatDate(this.date)}</p>
        </a>
        `;
    }
}