import App from './app.js';

// Elements of DOM
const $input = document.querySelector("input");
const $source = document.querySelector("source");
const $img = document.querySelector("img");
const $h2 = document.querySelector("h2");
const $follower = document.querySelector("#follower");
const $repo = document.querySelector("#repository");
const $job = document.querySelector("#job");

const url = `https://api.github.com/users/`;

// Listening user's input
$input.addEventListener("input", () =>{
    if($input.value !== ""){
        const searchUser = new App($input, $source, $img, $h2, $follower, $repo, $job, url);
        searchUser.ajax();
        
    }
})