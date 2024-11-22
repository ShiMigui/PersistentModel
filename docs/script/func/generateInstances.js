import { database } from "./database.js";

const BODY = document.querySelector("body");

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

    for(let index in ARR){
        const ITEM = ARR[index];
        ITEM.id = index;

        const INSTANCE = new node(ITEM);
        const COMP = INSTANCE.name ? ` - ${INSTANCE.name}` : '';
        BODY.innerHTML += (`Generating... ${NAME}, ID: ${INSTANCE.id}${COMP}<br/>`);
        INSTANCE.commit();
    }
} 