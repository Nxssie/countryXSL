export let getData = () => {
    console.log("We are getting data correctly.");
}

export function loadXMLDoc(filename)
{
    if (window.ActiveXObject)
    {
        var xhttp = new ActiveXObject("Msxml2.XMLHTTP");
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

export function displayResult(popXML, gdpXML, popXSL, gdpXSL)
{
    // code for IE
    if (window.ActiveXObject || xhttp.responseType === "msxml-document")
    {
        document.getElementById("population").innerHTML = popXML.transformNode(popXSL);
        document.getElementById("gdp").innerHTML = gdpXML.transformNode(gdpXSL);
    }

    // code for Chrome, Firefox, Opera, etc.
    else if (document.implementation && document.implementation.createDocument)
    {
        let popProcessor = new XSLTProcessor();
        popProcessor.importStylesheet(popXSL);

        let gdpProcessor = new XSLTProcessor();
        gdpProcessor.importStylesheet(gdpXSL);

        let popResult = popProcessor.transformToFragment(popXML, document);
        let gdpResult = gdpProcessor.transformToFragment(gdpXML, document)
        document.getElementById("pop-tbody").appendChild(popResult);
        document.getElementById("gdp-tbody").appendChild(gdpResult);

    }
}