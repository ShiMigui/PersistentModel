import areInstancesGenerated from "./func/areInstancesGenerated.js";
import Publication from "./model/Publication.js";
import userSession from "./func/userSession.js";
import params from "./func/params.js";

if (areInstancesGenerated()) {
    userSession();

    const query = params.get("q").toLowerCase();

    const $publications = document.querySelector(".publications");
    const $queryEl = document.querySelector(".search-query");

    const allPublications = Publication.retrieveAll();

    const filtered = allPublications.filter(publication =>
        publication.title.toLowerCase().includes(query) ||
        publication.description.toLowerCase().includes(query) ||
        publication.type.name.toLowerCase().includes(query)
    );

    $queryEl.textContent = query;
    filtered.forEach(p => $publications.innerHTML += p.render());
}