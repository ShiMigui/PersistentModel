import Persistent from "./Persistent.js";

/**
 * @class PublicationType
 * @extends Persistent
 * @classdesc Represents a publication type with a unique ID and a name, extending the Persistent class for localStorage management.
 */
export default class PublicationType extends Persistent {
    /**
     * The name of the publication type.
     * @type {string}
     * @default ''
     */
    name = '';

    /**
     * Constructs a new PublicationType instance.
     * 
     * @constructor
     * @param {Object} [options={}] - The configuration object for the publication type.
     * @param {number} [options.id] - The unique ID for the publication type.
     * @param {string} [options.name] - The name of the publication type.
     */
    constructor({ id, name } = {}) {
        super({ id });
        this.name = name;
    }
}