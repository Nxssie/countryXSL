<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:x="https://www.nxssie.com"
                xmlns:wb="http://www.worldbank.org"
                exclude-result-prefixes="x">
    <xsl:output method="html"/>
    <xsl:template match="/">
        <xsl:for-each select="/wb:data/wb:data">
            <tr>
                <td>
                    <xsl:value-of select="wb:date"/>
                </td>
                <td class="gdp">
                    <xsl:value-of select="wb:value"/>
                </td>
            </tr>
        </xsl:for-each>
    </xsl:template>
</xsl:stylesheet>