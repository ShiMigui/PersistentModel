import areInstancesGenerated from "./func/areInstancesGenerated.js";
import getUsers from "./func/getUsers.js";
import { isLoggedIn, login } from "./func/userAuth.js";
import Author from "./model/Author.js";
import Guest from "./model/Guest.js";

areInstancesGenerated();

const USERS = getUsers();

const FORM = document.querySelector("form");

const $nameInp = FORM.querySelector("#nameInp");
const $mailInp = FORM.querySelector("#emailInp");
const $passwordInp = FORM.querySelector("#passwordInp");
const $passwordInp2 = FORM.querySelector("#passwordInp2");
const $typeUser = FORM.querySelector("#typeUser");

if (isLoggedIn()) window.location.href = "index.html";

FORM.addEventListener("submit", (e) => {
    e.preventDefault();

    try {
        const name = $nameInp.value.trim().toUpperCase();
        const email = $mailInp.value.trim().toLocaleLowerCase();
        const password = $passwordInp.value.trim();
        const password2 = $passwordInp2.value.trim();
        const type = $typeUser.value.toLowerCase();

        if (password !== password2) throw new Error("Passwords do not match");

        let exists = USERS.some((u) => u.email.toLocaleLowerCase() == email);

        if (exists) throw new Error("Email already registered");

        let CLASS = type == 'guest' ? Guest : Author;

        const id = CLASS.getLength() + 1;

        const o = {
            id,
            name,
            email,
            password
        };

        USERS.push(o);
        CLASS.commit(o);

        login(CLASS.getKey(o.id));

        window.location.href = './index.html';
    }
    catch (e) {
        alert(e.message);
        console.error(e);
    }
})