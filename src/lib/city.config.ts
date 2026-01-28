export const siteConfig = {
  // ═══════════════════════════════════════════════════════════════════════════
  // 🎨 LOGO - Change the logo text displayed in header/footer
  // ═══════════════════════════════════════════════════════════════════════════
  logoText: "EP",

  // ═══════════════════════════════════════════════════════════════════════════
  // 📍 LOCATION - Change these to target a new city
  // ═══════════════════════════════════════════════════════════════════════════
  city: "Dallas",
  state: "TX",
  country: "US",

  // ═══════════════════════════════════════════════════════════════════════════
  // 🔑 KEYWORDS - Primary & secondary SEO keywords
  // ═══════════════════════════════════════════════════════════════════════════
  primaryKeyword: "Emergency Plumber",
  secondaryKeyword: "24/7 Plumbing Service",

  // ═══════════════════════════════════════════════════════════════════════════
  // 🏢 BUSINESS INFO
  // ═══════════════════════════════════════════════════════════════════════════
  businessName: "Emergency Plumber Dallas",
  brand: "Emergency Plumber Dallas",
  domain: "https://emergency-plumber-houston.pages.dev",
  email: "support@emergencyplumberhouston.com",
  address: {
    street: "",
    city: "Dallas",
    state: "TX",
    zip: "77001",
    full: "Dallas, TX 77001",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 📞 PHONE - Update phone number here (updates entire site)
  // ═══════════════════════════════════════════════════════════════════════════
  phone: "+18663820802",
  displayPhone: "(866) 382-0802",

  // ═══════════════════════════════════════════════════════════════════════════
  // 🕒 HOURS
  // ═══════════════════════════════════════════════════════════════════════════
  openingHours: "Mo-Su 00:00-23:59",
  hoursDisplay: "24/7 Emergency Service",

  // ═══════════════════════════════════════════════════════════════════════════
  // 🧠 SEO - Meta title & description (used in <head>)
  // ═══════════════════════════════════════════════════════════════════════════
  metaTitle: "Emergency Plumber Dallas TX | 24/7 Fast Plumbing Service",
  metaDescription:
    "Need an emergency plumber in Dallas, TX? 24/7 fast plumbing repairs for leaks, drains, water heaters & sewer issues. Call now.",

  // ═══════════════════════════════════════════════════════════════════════════
  // 📝 PAGE HEADINGS - H1/H2 content for each page
  // ═══════════════════════════════════════════════════════════════════════════
  headings: {
    // Home page
    homeH1: "Emergency Plumber in Dallas, TX – Available 24/7",
    homeSubtitle:
      "Fast 24/7 emergency plumbing services including leak repair, drain cleaning, water heaters and sewer line repairs.",
    whyChooseH2: "Why Choose Emergency Plumber in Dallas, TX?",
    servicesH2: "Emergency Plumber Services in Dallas, TX",
    serviceAreasH2: "Emergency Plumber Near Dallas, TX",
    leadFormH2: "Need an Emergency Plumber? We'll Call You Back!",

    // About page
    aboutH1: "About Emergency Plumber Dallas",
    aboutSubtitle: "Dallas's trusted emergency plumbing service connecting homeowners with licensed professionals.",

    // Services page
    servicesH1: "Plumbing Services Available Through Our Network",
    servicesSubtitle:
      "We connect Dallas homeowners with independent, licensed plumbing professionals for all residential and commercial needs.",

    // Service Areas page
    serviceAreasH1: "Service Areas Across Dallas & Texas",
    serviceAreasSubtitle:
      "From downtown Dallas to the suburbs — we provide fast, reliable plumbing service connections.",

    // Contact page
    contactH1: "Contact Us",
    contactSubtitle: "Need Plumbing Help? Get Connected 24/7. Call anytime to get connected with a licensed plumber.",

    // FAQ page
    faqH1: "Frequently Asked Questions",
    faqSubtitle: "Got questions? We've got answers. If you don't see what you're looking for, give us a call.",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 🛠️ PAGE CONTENT - Descriptions and copy
  // ═══════════════════════════════════════════════════════════════════════════

  disclaimer:
    "Emergency Plumber Houston is a referral and lead generation service. We do not perform plumbing services directly.",

  // ═══════════════════════════════════════════════════════════════════════════
  // 📍 NEARBY AREAS - Displayed on homepage and service areas page
  // ═══════════════════════════════════════════════════════════════════════════
  nearbyAreas: [
    "Downtown Houston",
    "Midtown",
    "The Heights",
    "River Oaks",
    "Montrose",
    "Katy",
    "Sugar Land",
    "Pasadena",
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // 🗺️ REGIONS - For service areas page
  // ═══════════════════════════════════════════════════════════════════════════
  regions: [
    {
      name: "Greater Houston Area",
      cities: [
        "Houston",
        "The Woodlands",
        "Sugar Land",
        "Pearland",
        "Katy",
        "League City",
        "Baytown",
        "Pasadena",
        "Galveston",
        "Conroe",
      ],
      description: "We provide fast, reliable plumbing service connections throughout the Greater Houston area.",
    },
    {
      name: "Houston Metro Suburbs",
      cities: [
        "Spring",
        "Cypress",
        "Humble",
        "Kingwood",
        "Missouri City",
        "Friendswood",
        "Deer Park",
        "La Porte",
        "Seabrook",
        "Webster",
      ],
      description: "Serving all Houston suburban communities with 24/7 emergency plumbing connections.",
    },
    {
      name: "Dallas Metro Suburbs",
      cities: [
        "Spring",
        "Cypress",
        "Humble",
        "Kingwood",
        "Missouri City",
        "Friendswood",
        "Deer Park",
        "La Porte",
        "Seabrook",
        "Webster",
      ],
      description: "Serving all Houston suburban communities with 24/7 emergency plumbing connections.",
    },
  ],
};

// Helper to generate phone link
export const getPhoneLink = () => `tel:${siteConfig.phone}`;
