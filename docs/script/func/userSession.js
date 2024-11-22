import { getUser, isLoggedIn } from "./userAuth.js"
import { hide, unhide } from "./hidden.js";

const HEADER = document.querySelector("header .right")
export default () => {
    if (isLoggedIn()) {
        const buttons = HEADER.querySelectorAll("a.btn");
        buttons.forEach(e => hide(e));

        const USER = getUser();
        const accountBox = HEADER.querySelector("#account-box");
        const accountName = accountBox.querySelector("#account-name");
        accountName.textContent = USER.firstName();
        unhide(accountBox);
    }
}