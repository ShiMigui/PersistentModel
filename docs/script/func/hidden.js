const WORD = 'hidden';

/**
 * Hides the element by adding the `hidden` class.
 * 
 * @param {HTMLElement} el - The element to hide by adding the `hidden` class.
 */
export function hide(el) {
    el.setAttribute(WORD, '');
}

/**
 * Shows the element by removing the `hidden` class.
 * 
 * @param {HTMLElement} el - The element to show by removing the `hidden` class.
 */
export function unhide(el) {
    el.removeAttribute(WORD);
}