import areInstancesGenerated from "./func/areInstancesGenerated.js";
import Publication from "./model/Publication.js";
import userSession from "./func/userSession.js";
import params from "./func/params.js";
import formatDate from "./func/formatDate.js";

areInstancesGenerated();

userSession();

const ID = params.get("cd");
if (!ID) window.location.href = 'index.html';

const REF = Publication.retrieveById(ID);

document.querySelector("title").innerText = REF.title;

const $main = document.querySelector("main");

const $description = $main.querySelector("#description");
const $guests = $main.querySelector("#guests");
const $author = $main.querySelector("#author");
const $title = $main.querySelector("#title");
const $date = $main.querySelector("#date");
const $img = $main.querySelector("img");


$author.textContent = REF.author.firstName();
$description.textContent = REF.description;
$date.textContent = formatDate(REF.date);
$title.textContent = REF.title;
$img.src = REF.image;

let str = '';
for (let i in REF.sharedWith) {
    const user = REF.sharedWith[i];
    str += `<div class='guest-box'><img class='guest' src='${user.image}'><h6>${user.firstName()}</h6></div>`;
}
$guests.innerHTML = str;