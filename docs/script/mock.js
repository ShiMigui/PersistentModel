import generateInstances from "./func/generateInstances.js";
import PublicationType from "./model/PublicationType.js";
import Classification from "./model/Classification.js";
import Publication from "./model/Publication.js";
import Author from "./model/Author.js";
import Guest from "./model/Guest.js";


generateInstances(PublicationType);
generateInstances(Classification);
generateInstances(Publication);
generateInstances(Author);
generateInstances(Guest);

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