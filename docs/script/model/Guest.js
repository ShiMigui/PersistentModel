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
     */
    password = '';

    /**
     * The email address of the guest.
     * @type {string}
     */
    email = '';

    /**
     * The name of the guest.
     * @type {string}
     */
    name = '';

    /**
     * The full name of the guest, captalized.
     * @type {string}
     */
    fullName;

    image;

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
    constructor({ id, name, email, password, image } = {}) {
        super({ id });
        this.password = password;
        this.name = name.toUpperCase();
        this.email = email.toUpperCase();
        this.fullName = this.capitalizeName();
        this.image = image ? image : './image/g50x50.png';
    }

    /**
     * Returns the guest's name capitalized.
     * 
     * @returns {string} The first guest's name.
     */
    firstName() {
        return this.fullName.split(' ')[0];
    }

    /**
     * Returns the guest's full name capitalized.
     * 
     * @returns {string} The guest's full name.
     */
    capitalizeName() {
        const ARR = this.name.split(' ');
        const capitalized = ARR.map(word => word.at(0).toUpperCase() + word.slice(1).toLowerCase());
        return capitalized.join(' ');
    }
}
