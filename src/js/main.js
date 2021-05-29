import _ from 'lodash';
import App from './app.js';
import * as util from './util.js';

// Elements of DOM
const $input = document.querySelector("input");
const $form = document.querySelector("form");
const $source = document.querySelector("source");
const $img = document.querySelector("img");
const $h2 = document.querySelector("h2");
const $follower = document.querySelector("#follower");
const $repo = document.querySelector("#repository");
const $job = document.querySelector("#job");
const $button = document.querySelector("#card > button");
const $toogleMode = document.querySelector("#toggle-mode-display > button");
const $year = document.querySelector("#year");

const regexUsername = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;
const url = `https://api.github.com/users/`;

// Manage body's loading
window.addEventListener("load", () => document.body.classList.remove("loading"));

// Switch mode's theme between dark and light
util.handleMode(window, localStorage, document.body, $toogleMode);

// Listening user's input
$input.addEventListener("input", () =>{
    
    if(regexUsername.test($input.value)){
    
        const searchUser = new App($input, $form, $source, $img, $h2, $follower, $repo, $job, $button, url);
        searchUser.ajax();
        
    }
});

// Display Year on the footer
util.getYear($year);