<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:x="https://www.nxssie.com"
                xmlns:wb="http://www.worldbank.org"
                exclude-result-prefixes="x">
    <xsl:output method="html"/>

    <xsl:decimal-format name="US" decimal-separator="." grouping-separator="," />
    <xsl:decimal-format name="EU" decimal-separator="," grouping-separator="." />
    <xsl:variable name="decimal-format-pattern">
        <xsl:choose>
            <xsl:when test="$decimal-format='US'">#,###.00</xsl:when>
            <xsl:when test="$decimal-format='EU'">#.###,00</xsl:when>
        </xsl:choose>
    </xsl:variable>
    <xsl:param name="decimal-format">EU</xsl:param>

    <xsl:template match="/">
        <xsl:for-each select="/wb:data/wb:data">
            <tr>
                <td>
                    <xsl:value-of select="wb:date"/>
                </td>
                <td class="gdp">
                    <xsl:value-of select="format-number(number(wb:value),$decimal-format-pattern, $decimal-format)"/>
                </td>
            </tr>
        </xsl:for-each>
    </xsl:template>
</xsl:stylesheet>