import { getUser, isLoggedIn } from "./userAuth.js"
import { hide, unhide } from "./hidden.js";

const $header = document.querySelector("header .right")
export default () => {
    if (isLoggedIn()) {
        const $buttons = $header.querySelector(".btns");
        hide($buttons);

        const USER = getUser();
        //const $dropdown = $header.querySelector(".dropdown");
        const $accountBox = $header.querySelector("#account-box");
        const $accountName = $accountBox.querySelector("#account-name");
        const $accountImage = $accountBox.querySelector("#account-image");

        $accountName.textContent = USER.firstName();
        unhide($accountBox);
        $accountImage.src = USER.image;

        $accountImage.addEventListener("click", () => $accountImage.toggleAttribute('active'));
    }
}