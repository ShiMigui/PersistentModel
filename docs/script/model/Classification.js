import Persistent from "./Persistent.js";

/**
 * @class Classification
 * @extends Persistent
 * @classdesc Represents a classification with a unique ID and a numerical note, extending the Persistent class for localStorage management.
 */
export default class Classification extends Persistent {
    /**
     * The internal representation of the numerical note for the classification.
     * @type {number}
     * @private
     * @default 0
     */
    _note = 0;

    /**
     * Sets the note value, ensuring it cycles between 1 and 5.
     * 
     * @param {number} note - The new note value. Values are normalized to be within the range 1–5.
     */
    set note(note) {
        this._note = ((note - 1) % 5) + 1;
    }

    /**
     * Gets the current note value.
     * 
     * @returns {number} The current note value.
     */
    get note() {
        return this._note;
    }

    /**
     * Constructs a new Classification instance.
     * 
     * @constructor
     * @param {Object} [options={}] - The configuration object for the classification.
     * @param {number} [options.id] - The unique ID for the classification.
     * @param {number} [options.note] - The numerical note of the classification.
     */
    constructor({ id, note } = {}) {
        super({ id });
        this.note = note;
    }
};