import areInstancesGenerated from "./func/areInstancesGenerated.js";
import getUsers from "./func/getUsers.js";
import Guest from "./model/Guest.js";

if (areInstancesGenerated()) {
    const USERS = getUsers();

    const FORM = document.querySelector("form");

    let nameInp = FORM.querySelector("#nameInp");
    let mailInp = FORM.querySelector("#emailInp");
    let passwordInp = FORM.querySelector("#passwordInp");
    let passwordInp2 = FORM.querySelector("#passwordInp2");

    FORM.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = nameInp.value.trim().toUpperCase();
        const email = mailInp.value.trim();
        const password = passwordInp.value.trim();
        const password2 = passwordInp2.value.trim();

        if (!name || !email || !password || !password2) {
            alert("Please fill in all fields");
            return;
        }

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
        Guest.commit(o);
        window.location.href = './index.html';
    })
}