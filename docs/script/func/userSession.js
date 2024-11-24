import { getUser, isLoggedIn } from "./userAuth.js"
import { hide, unhide } from "./hidden.js";

const $header = document.querySelector("header .right")
export default () => {
    if (isLoggedIn()) {
        const $buttons = $header.querySelector(".buttons");
        hide($buttons);

        const USER = getUser();
        //const $dropdown = $header.querySelector(".dropdown");
        const $accountBox = $header.querySelector("#account-box");
        const $accountName = $accountBox.querySelector("#account-name");
        const $accountImage = $accountBox.querySelector("#account-image");
        const $arrow = $header.querySelector("[name='chevron-down-outline']");

        $accountName.textContent = USER.firstName();
        unhide($accountBox);
        $accountImage.src = USER.image;

        $arrow.addEventListener("click", () => $arrow.classList.toggle('active'));
    }
}