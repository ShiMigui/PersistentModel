import { PersistentModel } from "./PersistentModel.js";

export class Classification extends PersistentModel {
    note = 0;

    constructor({ id = 1, note = 0 } = {}) {
        super({ id });
        this.note = note;
    }
};

export class Author extends PersistentModel {
    name = '';
    /**
     * An array of Classification instances or an empty array.
     * @type {Classification[]}
     */
    classifications = [];

    constructor({ id = 1, name = '', classifications = [] } = {}) {
        super({ id });
        this.name = name;
        this.classifications = classifications.map(o => new Classification(o));
    }

    classify(classification = null) {
        if (!classification || !(classification instanceof Classification)) {
            throw new Error('Invalid classification');
        }
        this.classifications.push(classification);
    }

    classification() {
        if (this.classifications.length === 0) {
            return null;
        }

        return this.classifications.reduce((sum, c) => sum + c.note, 0);
    }
}