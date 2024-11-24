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

    const $main = document.querySelector("main");

    const $description = $main.querySelector("#description");
    const $img = $main.querySelector("#banner img");
    const $guests = $main.querySelector("#guests");
    const $author = $main.querySelector("#author");
    const $title = $main.querySelector("#title");
    const $date = $main.querySelector("#date");

    
    $author.textContent = publication.author.firstName();
    $description.textContent = publication.description;
    $date.textContent = formatDate(publication.date);
    $title.textContent = publication.title;
    $img.src = publication.image;

    let str = '';
    for (let i in publication.sharedWith) {
        const user = publication.sharedWith[i];
        str += `<div class='guest-box'><img class='guest' src='${user.image}'><h6>${user.firstName()}</h6></div>`;
    }
    $guests.innerHTML = str;
}