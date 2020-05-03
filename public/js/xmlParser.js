var xhttp;
var xhttpgdp;

export function loadXMLDocPop(filename)
{
    if (window.ActiveXObject)
    {
        xhttp = new ActiveXObject("Msxml2.XMLHTTP");
    }
    else
    {
        xhttp = new XMLHttpRequest();
    }
    xhttp.open("GET", filename, false);
    try {xhttp.responseType = "msxml-document"} catch(err) {} // Helping IE11
    xhttp.send("");
    return xhttp.responseXML;
}

export function loadXMLDocGdp(filename)
{
    if (window.ActiveXObject)
    {
        xhttpgdp = new ActiveXObject("Msxml2.XMLHTTP");
    }
    else
    {
        xhttpgdp = new XMLHttpRequest();
    }
    xhttpgdp.open("GET", filename, false);
    try {xhttpgdp.responseType = "msxml-document"} catch(err) {} // Helping IE11
    xhttpgdp.send("");
    return xhttpgdp.responseXML;
}

export function displayResult(popXML, gdpXML, popXSL, gdpXSL)
{
    // code for IE
    if (window.ActiveXObject || xhttp.responseType === "msxml-document")
    {
        document.getElementById("pop-tbody").innerHTML = popXML.transformNode(popXSL);
        document.getElementById("gdp-tbody").innerHTML = gdpXML.transformNode(gdpXSL);
    }

    // code for Chrome, Firefox, Opera, etc.
    else if (document.implementation && document.implementation.createDocument)
    {
        let popProcessor = new XSLTProcessor();
        popProcessor.importStylesheet(popXSL);
        let popResult = popProcessor.transformToFragment(popXML, document);
        document.getElementById("pop-tbody").appendChild(popResult);
        console.log(popResult);

        let gdpProcessor = new XSLTProcessor();
        gdpProcessor.importStylesheet(gdpXSL);
        let gdpResult = gdpProcessor.transformToFragment(gdpXML, document);
        document.getElementById("gdp-tbody").appendChild(gdpResult);





    }
}