import areInstancesGenerated from "./func/areInstancesGenerated.js";
import getUsers from "./func/getUsers.js";
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

FORM.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = $nameInp.value.trim().toUpperCase();
    const email = $mailInp.value.trim();
    const password = $passwordInp.value.trim();
    const password2 = $passwordInp2.value.trim();
    const type = $typeUser.value.toLowerCase();

    if (password !== password2) {
        alert("Passwords do not match");
        return;
    }

    let userExists = false;
    for (let u of USERS) {
        if (u.email === email) {
            userExists = true;
            break;
        }
    }

    if (userExists) {
        alert("Email already registered");
        return;
    }

    const id = USERS.length + 1;

    const o = {
        id,
        name,
        email,
        password
    };

    USERS.push(o);
    if (type == 'guest') {
        Guest.commit(o);
    }
    else {
        Author.commit(o);
    }
    window.location.href = './index.html';
})