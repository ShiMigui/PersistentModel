import { database } from "./database.js";

/**
 * Generates instances of a given class and commits them.
 *
 * The function takes a constructor function (`node`) and attempts to generate instances for each item
 * in the database array corresponding to the provided class. After creating each instance, it logs the
 * generation process and calls the `commit` method on the instance.
 *
 * @param {Function} node - The constructor function (e.g., `PublicationType`) used to create instances.
 * @throws {Error} Throws an error if `node` is not a constructor function or if the node does not exist in the database.
 * @returns {void} This function does not return anything.
 *
 * @example
 * generateInstances(PublicationType);
 */
export default function generateInstances(node = null) {
    const NAME = node.name;
    const ARR = database[NAME];
    if (!ARR) {
        console.error(`Error: ${node} does not exist in the database.`);
        return;
    }

    // Check if the constructor is valid
    if (typeof node !== 'function') {
        console.error(`Error: O must be a constructor function.`);
        return;
    }

    ARR.forEach(item => {
        const instance = new node(item);
        const comp = instance.name ? ` - ${instance.name}` : '';
        console.log(`Generating... ${NAME}, ID: ${instance.id}${comp}`);
        instance.commit();
    });
}

import generateInstances from "./generateInstances.js";
import { Author, Classification } from "./model/Author.js";
import { Guest } from "./model/Guest.js";
import { Publication, PublicationType } from "./model/Publication.js";

generateInstances(PublicationType);
generateInstances(Guest);
generateInstances(Classification);
generateInstances(Author);
generateInstances(Publication);

localStorage.setItem("generateInstances", "True");