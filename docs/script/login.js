import areInstancesGenerated from "./func/areInstancesGenerated.js";
import getUsers from "./func/getUsers.js";
import { isLoggedIn, login } from "./func/userAuth.js";

if (areInstancesGenerated()) {
    if (isLoggedIn()) window.location.href = "index.html";

    const PERSONS = getUsers();

    const FORM = document.querySelector("body>form");
    let nameInp = FORM.querySelector("#nameInp");
    let passInp = FORM.querySelector("#passwordInp");

    FORM.addEventListener("submit", (e) => {
        e.preventDefault();
        const NAME = nameInp.value.toUpperCase();
        const PASS = passInp.value;

        if (!NAME || !PASS) {
            alert("Please fill in all fields");
            return;
        }

        for (let item of PERSONS) {
            if (item.password === PASS && (item.name == NAME || item.email == NAME)) {
                login(item.getKey());
                window.location.href = "index.html"
                return;
            }
        }

        passInp.value = '';
        alert("Invalid credentials");
    })
}