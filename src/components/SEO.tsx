import { Helmet } from "react-helmet-async";
import { siteConfig } from "@/lib/city.config";

interface SEOProps {
  page?: string; // optional page modifier
  schema?: object;
}

export const SEO = ({ page, schema }: SEOProps) => {
  const titleBase = siteConfig.primaryKeyword;
  const fullTitle = page
    ? `${page} | ${titleBase}`
    : `${titleBase} | ${siteConfig.secondaryKeyword}`;

  const description = `${siteConfig.primaryKeyword} – ${siteConfig.serviceDescription} Serving ${siteConfig.city}, ${siteConfig.state}. Call now.`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={siteConfig.domain} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />

      {/* Schema */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
