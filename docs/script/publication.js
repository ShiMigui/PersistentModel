import areInstancesGenerated from "./func/areInstancesGenerated.js";
import Publication from "./model/Publication.js";
import userSession from "./func/userSession.js";
import params from "./func/params.js";
import formatDate from "./func/formatDate.js";

if (areInstancesGenerated()) {
    userSession();

    const ID = params.get("cd");
    if (!ID) window.location.href = 'index.html';

    const publication = Publication.retrieveById(ID);

    const MAIN = document.querySelector("main");

    const description = MAIN.querySelector("#description");
    const IMG = MAIN.querySelector("#banner img");
    const title = MAIN.querySelector("#title");
    const date = MAIN.querySelector("#date");

    IMG.src = "https://via.placeholder.com/1920x1080";

    description.textContent = publication.description;
    date.textContent = formatDate(publication.date);
    title.textContent = publication.title;
}