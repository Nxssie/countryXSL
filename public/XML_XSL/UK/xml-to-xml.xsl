<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:wb="http://www.worldbank.org"
                xmlns="https://www.nxssie.com"
                xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                xsi:schemaLocation="https://www.nxssie.com uk_output.xsd">
    <xsl:output method="xml"/>

    <xsl:template match="/">
            <data>
                <pop>
                    <xsl:call-template name="population"/>
                </pop>
                <gdp>
                    <xsl:call-template name="gdp" />
                </gdp>
            </data>
    </xsl:template>

    <xsl:decimal-format name="US" decimal-separator="." grouping-separator="," />
    <xsl:decimal-format name="EU" decimal-separator="," grouping-separator="." />
    <xsl:variable name="decimal-format-pattern">
        <xsl:choose>
            <xsl:when test="$decimal-format='US'">#,###.00</xsl:when>
            <xsl:when test="$decimal-format='EU'">#.###,00</xsl:when>
        </xsl:choose>
    </xsl:variable>

    <!-- Template for population data -->
    <xsl:template name="population">
        <xsl:for-each select="/wb:data/population/wb:data">
            <xsl:variable name="popValue" select="wb:value" />
            <entry>
                    <date> <xsl:value-of select="wb:date"/> </date>
                    <indicator> <xsl:value-of select="wb:indicator"/> </indicator>
                    <country> <xsl:value-of select="wb:country"/> </country>
                    <population>
                        <xsl:value-of select="format-number(number($popValue),$decimal-format-pattern, $decimal-format)"/>
                    </population>
            </entry>
        </xsl:for-each>
    </xsl:template>

    <xsl:param name="decimal-format">EU</xsl:param>

    <!-- Template for GDP data -->
    <xsl:template name="gdp">
        <xsl:for-each select="/wb:data/gdp/wb:data">

            <xsl:variable name="gdpValue" select="wb:value" />

            <entry>
                <date> <xsl:value-of select="wb:date"/> </date>
                <indicator> <xsl:value-of select="wb:indicator"/> </indicator>
                <country> <xsl:value-of select="wb:country"/> </country>
                <gdp>
                    <xsl:value-of select="format-number(number($gdpValue),$decimal-format-pattern, $decimal-format)"/>
                </gdp>
            </entry>
        </xsl:for-each>
    </xsl:template>

</xsl:stylesheet>