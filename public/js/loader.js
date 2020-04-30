import {loadNavbar} from './navbar.js';
import {checkNumber} from './checkings.js';
import { getData, displayResult, loadXMLDoc } from "./javaXML/xmlParser";

window.onload = initialize;

function initialize() {
    document.getElementById("my-navbar").innerHTML = loadNavbar();

    // for the future idea
    /*let countries = {"China":"CN", "Switzerland":"CHE", "Norway":"NOR"};
    countries[document.getElementById("")]*/

    let popXSL = "./XML_XSL/online-pop.xsl"
    let gdpXSL = "./XML_XSL/online-gdp.xsl"
    switch (document.getElementById){
        case "china" :
            let popXML = "http://api.worldbank.org/v2/country/CN/indicator/NY.GDP.MKTP.CD?format=xml"
            let gdpXML = "http://api.worldbank.org/v2/country/CN/indicator/SP.POP.TOTL?format=xml"
            displayResult(popXML, gdpXML, popXSL, gdpXSL);
            break;
    }
    getData();
    checkNumber();
}