import areInstancesGenerated from "./func/areInstancesGenerated.js";
import generateInstances from "./func/generateInstances.js";
import PublicationType from "./model/PublicationType.js";
import Classification from "./model/Classification.js";
import Publication from "./model/Publication.js";
import userSession from "./func/userSession.js";
import Author from "./model/Author.js";
import Guest from "./model/Guest.js";



{
    generateInstances(PublicationType);
    generateInstances(Classification);
    generateInstances(Publication);
    generateInstances(Author);
    generateInstances(Guest);

    localStorage.setItem("generateInstances", "True");

    userSession();

    const $publications = document.querySelector(".publications");
    const LENGTH = Publication.getLength();
    for (let i = 1; i <= LENGTH; i++) {
        // Inits with i equals to 1, because the first publication's id is always 1.
        const P = Publication.retrieveById(i);
        if (P) $publications.innerHTML += P.render();
    }
}