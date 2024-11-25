import Persistent from "./Persistent.js";

/**
 * @class Guest
 * @extends Persistent
 * @classdesc Represents a guest user with a name, email, and password, extending the Persistent class for localStorage management.
 */
export default class Guest extends Persistent {
    /**
     * The password of the guest.
     * @type {string}
     * @default ''
     */
    password = '';

    /**
     * The email address of the guest.
     * @type {string}
     * @default ''
     */
    email = '';

    /**
     * The name of the guest.
     * @type {string}
     * @default ''
     */
    name = '';

    image = 'http://via.placeholder.com/50x50'

    /**
     * Constructs a new Guest instance.
     * 
     * @constructor
     * @param {Object} [options={}] - The configuration object for the guest.
     * @param {number} [options.id] - The unique ID for the guest.
     * @param {string} [options.name] - The name of the guest.
     * @param {string} [options.email] - The email of the guest.
     * @param {string} [options.password] - The password of the guest.
     */
    constructor({ id, name, email, password } = {}) {
        super({ id });
        this.name = name.toUpperCase();
        this.email = email.toUpperCase();
        this.password = password;
    }

    /**
     * Returns the guest's name capitalized.
     * 
     * @returns {string} The first guest's name.
     */
    firstName(){
        const NAME = this.name.split(' ')[0];
        return NAME.at(0) + NAME.slice(1).toLowerCase();
    }
}
