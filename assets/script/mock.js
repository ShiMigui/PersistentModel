import { Publication, PublicationType } from "./model/Publication.js";
import { Author, Classification } from "./model/Author.js";
import generateInstances from "./localStorage/generateInstances.js";
import { Guest } from "./model/Guest.js";

generateInstances(PublicationType);
generateInstances(Guest);
generateInstances(Classification);
generateInstances(Author);
generateInstances(Publication);

localStorage.setItem("generateInstances", "True");

document.querySelector("body").innerHTML += "Returning in...<br/>";
let n = 5;
setInterval(() => {
    document.querySelector("body").innerHTML += `${n}......<br/>`
    window.scrollTo(0, document.body.scrollHeight);
    if(n == 0){
        window.location.href = 'index.html';
    }
    n--;
}, 1000);