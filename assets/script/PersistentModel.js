export class PersistentModel {
   id = 0;

   constructor({ id = 1 } = {}) {
      this.id = id;
   }

   commit() {
      const str = JSON.stringify(this);
      const KEY = `${this.constructor.name}.${this.id}`;
      localStorage.setItem(KEY, str);

      //console.log(`setting ${KEY}: ${str}`);
   }

   static retrieveById(id = 1) {
      const DATA = localStorage.getItem(`${this.name}.${id}`);
      return DATA ? new this(JSON.parse(DATA)) : null;
   }
};