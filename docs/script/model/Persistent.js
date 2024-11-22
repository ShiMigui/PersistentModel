/**
 * @class Persistent
 * @classdesc A base class for managing persistent objects in localStorage with unique IDs.
 * This class provides functionality to store, retrieve, and manage objects in the browser's
 * localStorage. Each object is uniquely identified by an `id` and associated with a key 
 * derived from the class name and its ID.
 */
export default class Persistent {
   /**
    * The unique identifier for the instance.
    * 
    * @type {number}
    * @default 0
    * @example
    * const instance = new Persistent({ id: 1 });
    * console.log(instance.id); // 1
    */
   id;

   /**
    * Constructs a new Persistent instance.
    * 
    * @constructor
    * @param {Object} [options={}] - The configuration object.
    * @param {number} [options.id] - The unique ID for the instance. This is required.
    * @throws {Error} If `id` is not provided.
    * 
    * @example
    * const instance = new Persistent({ id: 1 });
    * console.log(instance.id); // Outputs: 1
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
    * Converts the instance to a JSON string and stores it in localStorage. The storage
    * key is derived from the class name and the `id` property. Updates the class's stored
    * length if the `id` is greater than the current length.
    * 
    * @example
    * const instance = new Persistent({ id: 2 });
    * instance.commit(); // Saves the instance to localStorage.
    */
   commit() {
      this.constructor.commit(this);
   }

   /**
    * Commits an object to localStorage.
    * 
    * @static
    * @param {Persistent} obj - The object to commit to localStorage.
    * 
    * @example
    * const instance = new Persistent({ id: 3 });
    * Persistent.commit(instance); // Saves the instance.
    */
   static commit(obj) {
      const id = obj.id;
      const str = JSON.stringify(obj);
      const key = this.getKey(id);

      localStorage.setItem(key, str);

      if (id > this.getLength()) {
         this.setLength(id);
      }
   }

   /**
    * Retrieves an instance by its ID from localStorage.
    * 
    * @static
    * @param {number} [id=1] - The ID of the instance to retrieve.
    * @returns {Persistent|null} The retrieved instance or `null` if not found.
    * 
    * @example
    * const instance = Persistent.retrieveById(1);
    * if (instance) {
    *    console.log(instance.id); // Outputs: 1
    * }
    */
   static retrieveById(id) {
      const DATA = localStorage.getItem(`${this.name}.${id}`);
      return DATA ? new this(JSON.parse(DATA)) : null;
   }

   /**
    * Retrieves all instances of the class from localStorage.
    * 
    * Iterates through all stored IDs up to the current length and retrieves
    * all stored objects.
    * 
    * @static
    * @returns {Persistent[]} An array of all instances found in localStorage.
    * 
    * @example
    * const instances = Persistent.getAll();
    * console.log(instances.length); // Outputs the total number of stored instances.
    */
   static retrieveAll() {
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
    * 
    * @example
    * const total = Persistent.getLength();
    * console.log(total); // Outputs the total count of Persistent instances.
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
    * 
    * @example
    * Persistent.setLength(10); // Updates the length to 10.
    */
   static setLength(id) {
      localStorage.setItem(`${this.name}.length`, id);
   }

   /**
    * Generates the unique key for this instance in localStorage.
    * 
    * @returns {string} The storage key for this instance.
    * 
    * @example
    * const instance = new Persistent({ id: 4 });
    * console.log(instance.getKey()); // Outputs: "Persistent.4"
    */
   getKey() {
      return this.constructor.getKey(this.id);
   }

   /**
    * Generates a unique key for a given ID in localStorage.
    * 
    * @static
    * @param {number} id - The ID to generate the key for.
    * @returns {string} The storage key for the given ID.
    * 
    * @example
    * const key = Persistent.getKey(5);
    * console.log(key); // Outputs: "Persistent.5"
    */
   static getKey(id) {
      return `${this.name}.${id}`;
   }
}