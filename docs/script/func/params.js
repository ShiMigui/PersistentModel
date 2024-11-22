const params = new URLSearchParams(window.location.search);

export default params;

/**
 * Retrieves the value of a specific query parameter from the URL.
 * 
 * @param {string} name - The name of the query parameter.
 * @returns {string|null} The value of the query parameter, or null if not found.
 */
export function get(name) {
    return params.get(name);
}