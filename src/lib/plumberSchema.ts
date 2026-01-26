export const plumberSchema = (city: string, state: string) => ({
  "@context": "https://schema.org",
  "@type": "Plumber",
  name: `Emergency Plumber ${city} – Plumbing Help Desk`,
  telephone: "+1-469-581-3414",
  areaServed: {
    "@type": "City",
    name: city,
    addressRegion: state,
    addressCountry: "US"
  },
  openingHours: "Mo-Su 00:00-23:59",
  priceRange: "$$",
  description: `24/7 emergency plumber in ${city}, ${state} providing fast plumbing repairs for leaks, drains, water heaters and sewer issues.`
});
