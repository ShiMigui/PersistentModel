import Guest from "../model/Guest.js";

/**
 * Logs in the user by storing their login key in sessionStorage.
 * 
 * @param {string} loginKey - The unique key representing the user's login.
 * 
 * @example
 * var user = new Guest();
 * login(user.getKey());
 */
export function login(loginKey) {
    sessionStorage.setItem("login", loginKey.trim());
}

/**
 * Logs out the current user by removing their login key from sessionStorage.
 */
export function logout() {
    sessionStorage.removeItem("login");
}

/**
 * Retrieves the current login key from sessionStorage.
 * 
 * @returns {string|null} The login key, or `null` if not logged in.
 */
export function getLogin() {
    return sessionStorage.getItem("login");
}

/**
 * Retrieves the current user's data from localStorage.
 * 
 * @returns {Guest|null} The parsed user data object, or `null` if no user is logged in or data is missing.
 */
export function getUser() {
    const LOGIN = getLogin();
    if (!LOGIN) return null;

    const DATA = localStorage.getItem(LOGIN);
    return DATA ? new Guest(JSON.parse(DATA)) : null;
}

/**
 * Checks whether a user is currently logged in.
 * 
 * @returns {boolean} `true` if a user is logged in and their data exists; otherwise, `false`.
 */
export function isLoggedIn() {
    return !!getUser();
}
