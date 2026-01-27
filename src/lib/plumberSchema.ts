import { siteConfig } from "./city.config";

export const plumberSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Plumber"],

  "@id": `${siteConfig.domain}#plumber`,

  name: `${siteConfig.brand} – Emergency Plumber in ${siteConfig.city}, ${siteConfig.state}`,

  url: siteConfig.domain,

  telephone: siteConfig.phone,

  priceRange: "$$",

  description: `Need an emergency plumber in ${siteConfig.city}, ${siteConfig.state}? ${siteConfig.serviceDescription}`,

  areaServed: {
    "@type": "City",
    name: siteConfig.city,
    addressRegion: siteConfig.state,
    addressCountry: "US"
  },

  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.city,
    addressRegion: siteConfig.state,
    addressCountry: "US"
  },

  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      opens: "00:00",
      closes: "23:59"
    }
  ]
});
