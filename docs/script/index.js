import areInstancesGenerated from "./func/areInstancesGenerated.js";
import userSession from "./func/userSession.js";
import Publication from "./model/Publication.js";

if (areInstancesGenerated()) {
    userSession();

    const publications = document.querySelector(".publications");
    const publicationsLenght = Publication.getLength();
    for (let i = 1; i <= publicationsLenght; i++) {
        const publication = Publication.retrieveById(i);
        publications.innerHTML += publication.render();
    }
}