import {loadNavbar} from './navbar.js';
import {checkNumber} from './checkings.js';

window.onload = initialize;

function initialize() {
    document.getElementById("my-navbar").innerHTML = loadNavbar();
    checkNumber();
}