import areInstancesGenerated from "./func/areInstancesGenerated.js";
import getUsers from "./func/getUsers.js";
import { isLoggedIn, login } from "./func/userAuth.js";

areInstancesGenerated();

if (isLoggedIn()) window.location.href = "index.html";

const PERSONS = getUsers();

const FORM = document.querySelector("body>form");
const $nameInp = FORM.querySelector("#nameInp");
const $passInp = FORM.querySelector("#passwordInp");

FORM.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = $nameInp.value.toUpperCase();
    let pass = $passInp.value;

    for (let item of PERSONS) {
        if (item.password === pass && (item.name == name || item.email == name)) {
            login(item.getKey());
            window.location.href = "index.html"
            return;
        }
    }

    $passInp.value = '';
    alert("Invalid credentials");
})