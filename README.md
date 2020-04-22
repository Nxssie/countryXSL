# CountryXSL
XSL Project using OpenData from different countries.

## Must
When you want to generate a new XML/HTML from source, you must specify these paths to the output. 
  * Norway: ``` \XML_XSL\Norway\norway_output.xml (.html) ```
  * Switzerland: ``` \XML_XSL\Switzerland\switzerland_output.xml (.html) ```
  * UK: ``` \XML_XSL\UK\uk_output.xml (.html) ```

This is because each html page need to get the info separately from its own path.

## Tools
* IntelliJ Webstorm 2019.3 - IDE
* VS Code

## Resources
* Online XML of total population in Switzerland: http://api.worldbank.org/v2/country/CH/indicator/SP.POP.TOTL?format=xml
* XSL file to simplify the original XML to another XML with an specific format: https://github.com/Nxssie/countryXSL/blob/master/xml-to-xml.xsl
* XSL file to transform the simplified XML to an HTML page: https://github.com/Nxssie/countryXSL/blob/master/xml-to-html.xsl

## Acknowledgments
* WorldBank Opendata: https://data.worldbank.org/
* Switzerland General data chart: https://data.worldbank.org/country/switzerland?view=chart
* Norway General data chart: https://data.worldbank.org/country/norway?view=chart
* UK General data chart: https://data.worldbank.org/country/united-kingdom?view=chart

