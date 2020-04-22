<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:x="https://www.nxssie.com"
                exclude-result-prefixes="x">
    <xsl:output method="html"/>
    <xsl:template match="/">
        <html lang="en">
            <head>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                <meta http-equiv="x-ua-compatible" content="ie=edge"/>
                <title>Switzerland Database</title>
                <!-- Font Awesome -->
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"/>
                <!-- Google Fonts -->
                <link rel="stylesheet"
                      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700?display=swap"/>
                <!-- Bootstrap core CSS -->
                <link rel="stylesheet" href="css/bootstrap.min.css"/>
                <!-- Material Design Bootstrap -->
                <link rel="stylesheet" href="css/mdb.min.css"/>
                <!-- My styles -->
                <link rel="stylesheet" href="css/style.css"/>
                <!-- Your custom scripts (optional) -->
                <script type="module" src="js/loader.js"></script>
            </head>
            <body>

                <!-- Start your project here-->
                <nav class="navbar navbar-expand-lg navbar-dark primary-color" id="my-navbar"></nav>
                <div class="container" id="header">
                    <h2>This is our available data from Switzerland</h2>
                    <p>Taken from this
                        <a href="https://data.worldbank.org/country/switzerland">source</a>
                    </p>
                </div>
                <div class="row">
                    <div class="col-sm-6 table-wrapper-scroll my-custom-scrolltable">
                        <table class="table table-bordered table-striped mb-0" id="pop-table">
                            <thead class="thead-dark">
                                <th>Date</th>
                                <th>Population</th>
                            </thead>
                            <tbody>
                                <xsl:for-each select="//x:data/x:pop/x:entry">
                                    <tr>
                                        <td>
                                            <xsl:value-of select="x:date" />
                                        </td>
                                        <td class="population">
                                            <xsl:value-of select="x:population" />
                                        </td>
                                    </tr>
                                </xsl:for-each>
                            </tbody>
                        </table>
                    </div>
                    <div class="col-sm-6 table-wrapper-scroll my-custom-scrolltable">
                        <table class="table table-bordered table-striped mb-0" id="gdp-table">
                            <thead class="thead-dark">
                                <th>Date</th>
                                <th>GDP (PIB) in $</th>
                            </thead>
                            <tbody>
                                <xsl:for-each select="//x:data/x:gdp/x:entry">
                                    <tr>
                                        <td>
                                            <xsl:value-of select="x:date"/>
                                        </td>
                                        <td class="gdp">
                                            <xsl:value-of select="x:gdp"/>
                                        </td>
                                    </tr>
                                </xsl:for-each>
                            </tbody>
                        </table>
                    </div>
                </div>
                <!-- End your project here-->

                <!-- jQuery -->
                <script type="text/javascript" src="js/jquery.min.js"></script>
                <!-- Bootstrap tooltips -->
                <script type="text/javascript" src="js/popper.min.js"></script>
                <!-- Bootstrap core JavaScript -->
                <script type="text/javascript" src="js/bootstrap.min.js"></script>
                <!-- MDB core JavaScript -->
                <script type="text/javascript" src="js/mdb.min.js"></script>

            </body>
        </html>

    </xsl:template>
</xsl:stylesheet>