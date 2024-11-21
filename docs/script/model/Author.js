import Classification from "./Classification.js";
import Guest from "./Guest.js";

export default class Author extends Guest {
    classifications = [];

    constructor({ id = 1, name = '', email = '', classifications = [] } = {}) {
        super({ id, name, email });
        this.classifications = classifications.map(o => new Classification(o));
    }

    classify(classification = null) {
        if (!classification || !(classification instanceof Classification)) {
            throw new Error('Invalid classification');
        }
        this.classifications.push(classification);
    }

    classification() {
        const LENGTH = this.classifications.length
        if (LENGTH === 0) {
            return null;
        }

        return this.classifications.reduce((sum, c) => sum + c.note, 0) / LENGTH;
    }
}