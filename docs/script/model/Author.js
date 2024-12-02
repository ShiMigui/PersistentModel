import Classification from "./Classification.js";
import Guest from "./Guest.js";

/**
 * @class Author
 * @extends Guest
 * @classdesc Represents an author who can have classifications and manage their average classification score. 
 */
export default class Author extends Guest {
    /**
     * The list of classifications associated with the author.
     * @type {Classification[]}
     * @default []
     */
    classifications = [];

    /**
     * Constructs a new Author instance.
     * 
     * @constructor
     * @param {Object} [options={}] - The configuration object for the author.
     * @param {number} [options.id] - The unique ID for the author.
     * @param {string} [options.name] - The name of the author.
     * @param {string} [options.email] - The email of the author.
     * @param {string} [options.password] - The email of the author.
     * @param {Object[]} [options.classifications] - An array of classification objects to associate with the author.
     */
    constructor({ id, name, email, password, classifications = [] } = {}) {
        super({ id, name, email, password });
        this.classifications = classifications != [] ? classifications.map(o => new Classification(o)) : [];
    }

    /**
     * Adds a new classification to the author.
     * 
     * @param {Classification} classification - The classification to add.
     * @throws {Error} If the classification is null or `classification.note` is `undefined`.
     */
    classify(classification = {}) {
        if (!classification || classification.note == undefined) {
            throw new Error('Invalid classification');
        }
        this.classifications.push(classification);
    }

    /**
     * Calculates the average note from the author's classifications.
     * 
     * @returns {number} The average classification note, or 0 if there are no classifications.
     */
    classification() {
        const LENGTH = this.classifications.length;
        if (LENGTH === 0) {
            return 0;
        }

        return this.classifications.reduce((sum, c) => sum + c.note, 0) / LENGTH;
    }
}