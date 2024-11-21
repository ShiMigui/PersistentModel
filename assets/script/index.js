import { Publication } from "./model/Publication.js";

{
    let generated = localStorage.getItem("generateInstances") == "True";
    if (generated) {
        console.log("Instances have already been generated.");
    } else {
        let r = window.confirm("The instances are not generated. Do you want to?");
        if (r) {
            window.location.href = "./mock.html";
        }
        else {
            console.log("Instances generation canceled.");
        }
    }
}

let publications = document.querySelector(".publications");

console.log(Publication.getLength());

for (let i = 1; i <= Publication.getLength(); i++) {
    let publication = Publication.retrieveById(i);
    publications.innerHTML += publication.render();
}