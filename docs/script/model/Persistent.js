/**
 * @class Persistent
 * @classdesc A base class for managing persistent objects in localStorage with unique IDs.
 */
export default class Persistent {
   /**
    * The unique identifier for the instance.
    * @type {number}
    * @default 0
    */
   id;

   /**
    * Constructs a new Persistent instance.
    * 
    * @constructor
    * @param {Object} [options={}] - The configuration object.
    * @param {number} [options.id] - The unique ID for the instance.
    * @throws {Error} If `id` is not provided.
    */
   constructor({ id } = {}) {
      if (!id) {
         throw new Error("ID is required in a Persistent Class!");
      }
      this.id = id;
   }

   /**
   * Commits the instance data to localStorage.
   * 
   * Stores the instance as a JSON string in localStorage, using a key derived 
   * from the class name and the `id` property. Updates the class length if necessary.
   */
   commit() {
      const str = JSON.stringify(this);
      const KEY = `${this.constructor.name}.${this.id}`;
      localStorage.setItem(KEY, str);

      if (this.id > this.constructor.getLength()) {
         this.constructor.setLength(this.id);
      }
   }

   /**
    * Retrieves an instance by its ID from localStorage.
    * 
    * @static
    * @param {number} [id=1] - The ID of the instance to retrieve.
    * @returns {Persistent|null} The retrieved instance or `null` if not found.
    */
   static retrieveById(id) {
      const DATA = localStorage.getItem(`${this.name}.${id}`);
      return DATA ? new this(JSON.parse(DATA)) : null;
   }

   /**
    * Retrieves all instances of the class from localStorage.
    * 
    * @static
    * @returns {Persistent[]} An array of all instances found in localStorage.
    */
   static getAll() {
      const ITEMS = [];
      const LENGTH = this.getLength();
      for (let i = 1; i <= LENGTH; i++) {
         const item = this.retrieveById(i);
         if (item) {
            ITEMS.push(item);
         }
      }
      return ITEMS;
   }

   /**
    * Gets the total number of instances stored in localStorage.
    * 
    * @static
    * @returns {number} The total number of stored instances.
    */
   static getLength() {
      const N = localStorage.getItem(`${this.name}.length`);
      return parseInt(N || 0);
   }

   /**
    * Updates the total number of instances stored in localStorage.
    * 
    * @static
    * @param {number} [id=1] - The new total number of instances.
    */
   static setLength(id) {
      localStorage.setItem(`${this.name}.length`, id);
   }
}