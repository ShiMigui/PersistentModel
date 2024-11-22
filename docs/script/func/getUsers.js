import Author from "../model/Author.js";
import Guest from "../model/Guest.js";

/**
 * Retrieves all authors and guests, combining them into a single array.
 * 
 * This function fetches all instances of the `Author` and `Guest` classes by calling 
 * their respective `getAll()` methods and merges them into a single array, which is then returned.
 * 
 * @returns {Array<Author|Guest>} An array containing both `Author` and `Guest` instances.
 * */
export default () => {
    const PERSONS = [];
    Author.retrieveAll().forEach(item => PERSONS.push(item));
    Guest.retrieveAll().forEach(item => PERSONS.push(item));
    return PERSONS;
}