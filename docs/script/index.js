import Publication from "./model/Publication.js";

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

const publications = document.querySelector(".publications");
const publicationsLenght = Publication.getLength();
for (let i = 1; i <= publicationsLenght; i++) {
    const publication = Publication.retrieveById(i);
    publications.innerHTML += publication.render();
}