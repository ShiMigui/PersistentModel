import areInstancesGenerated from "./func/areInstancesGenerated.js";
import getUsers from "./func/getUsers.js";

if (areInstancesGenerated()) {
    const LOGIN = sessionStorage.getItem("login");
    if (LOGIN && localStorage.getItem(LOGIN))
        window.location.href = "index.html";

    const PERSONS = getUsers();

    const FORM = document.querySelector("body>form");
    let nameInp = FORM.querySelector("#nameInp");
    let passInp = FORM.querySelector("#passwordInp");

    FORM.addEventListener("submit", (e) => {
        e.preventDefault();
        const NAME = nameInp.value.toLowerCase();
        const PASS = passInp.value;

        if (!NAME || !PASS) {
            alert("Please fill in all fields");
            return;
        }

        console.log("test");

        for (let item of PERSONS) {
            if (item.password === PASS && (item.name == NAME || item.email == NAME)) {
                sessionStorage.setItem("login", item.getKey());
                window.location.href = "index.html";
                return null;
            }
        }

        passInp.value = '';
        alert("Invalid credentials");
    })
}