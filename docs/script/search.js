import areInstancesGenerated from "./func/areInstancesGenerated.js";
import Publication from "./model/Publication.js";
import userSession from "./func/userSession.js";
import params from "./func/params.js";

areInstancesGenerated();

userSession();

const QUERY = params.get("q").toLowerCase();

const $publications = document.querySelector(".publications");
const $queryEl = document.querySelector(".search-query");

const allPublications = Publication.retrieveAll();

const filtered = allPublications.filter(publication =>
    publication.title.toLowerCase().includes(QUERY) ||
    publication.description.toLowerCase().includes(QUERY) ||
    publication.type.name.toLowerCase().includes(QUERY)
);

$queryEl.textContent = QUERY;
filtered.forEach(p => $publications.innerHTML += p.render());