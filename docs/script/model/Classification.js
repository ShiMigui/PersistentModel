import Persistent from "./Persistent.js";

export default class Classification extends Persistent {
    note = 0;

    constructor({ id = 1, note = 0 } = {}) {
        super({ id });
        this.note = note;
    }
};