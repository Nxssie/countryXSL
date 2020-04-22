export let checkNumber =  () => {
    let popElements = document.getElementsByClassName("population");
    let gdpElements = document.getElementsByClassName("gdp");
    for (let i = 0; i < popElements.length; i++) {
        if(popElements[i].childNodes[0].nodeValue === "NaN") {
            popElements[i].childNodes[0].nodeValue = "No existing data.";
            gdpElements[i].childNodes[0].nodeValue = "No existing data.";
        }
    }
}