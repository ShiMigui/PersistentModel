export class Persistent {
   id = 0;

   constructor({ id = 1 } = {}) {
      this.id = id;
   }

   commit() {
      const str = JSON.stringify(this);
      const KEY = `${this.constructor.name}.${this.id}`;
      localStorage.setItem(KEY, str);

      if (this.id > this.constructor.getLength()) {
         this.constructor.setLength(this.id);
      }
   }

   static retrieveById(id = 1) {
      const DATA = localStorage.getItem(`${this.name}.${id}`);
      return DATA ? new this(JSON.parse(DATA)) : null;
   }

   static getLength() {
      const N = localStorage.getItem(`${this.name}.length`);
      return parseInt(N || 0);
   }

   static setLength(id = 1) {
      localStorage.setItem(`${this.name}.length`, id);
   }
};