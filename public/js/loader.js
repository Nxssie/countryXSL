import {loadNavbar} from './navbar.js';
import {checkNumber} from './checkings.js';
import {getData,displayResult} from "./xmlParser.js";
import {loadXMLDocPop} from "./xmlParser.js";
import {loadXMLDocGdp} from "./xmlParser.js";

window.onload = initialize;

function initialize() {
    console.log("hola initialize");
    document.getElementById("my-navbar").innerHTML = loadNavbar();

    // for the future idea
    /*let countries = {"China":"CN", "Switzerland":"CHE", "Norway":"NOR"};
    countries[document.getElementById("")]*/

    getData();

    let popXSL = loadXMLDocPop("online-pop.xsl");
    let gdpXSL = loadXMLDocGdp("online-gdp.xsl");

    if (document.getElementById("china")) {
        let popXML = loadXMLDocPop("https://api.worldbank.org/v2/country/CN/indicator/SP.POP.TOTL?format=xml");
        let gdpXML = loadXMLDocGdp("https://api.worldbank.org/v2/country/CN/indicator/NY.GDP.MKTP.CD?format=xml");
        displayResult(popXML, gdpXML, popXSL, gdpXSL);
    }

    if (document.getElementById("peru")) {
        let popXML = loadXMLDocPop("https://api.worldbank.org/v2/country/PE/indicator/SP.POP.TOTL?format=xml");
        let gdpXML = loadXMLDocGdp("https://api.worldbank.org/v2/country/PE/indicator/NY.GDP.MKTP.CD?format=xml");
        displayResult(popXML, gdpXML, popXSL, gdpXSL);
    }

    if (document.getElementById("estonia")) {
        let popXML = loadXMLDocPop("https://api.worldbank.org/v2/country/EE/indicator/SP.POP.TOTL?format=xml");
        let gdpXML = loadXMLDocGdp("https://api.worldbank.org/v2/country/EE/indicator/NY.GDP.MKTP.CD?format=xml");
        displayResult(popXML, gdpXML, popXSL, gdpXSL);
    }

    checkNumber();
}