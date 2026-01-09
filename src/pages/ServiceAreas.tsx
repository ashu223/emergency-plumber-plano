import { MapPin, Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

const PHONE_LINK = "tel:+18175551234";

const regions = [
  {
    name: "Dallas-Fort Worth Metroplex",
    cities: ["Dallas", "Fort Worth", "Arlington", "Plano", "Irving", "Garland", "McKinney", "Frisco", "Denton", "Richardson"],
    description: "The DFW area is our home base. We provide fast response times throughout the Metroplex, from downtown Dallas to the growing suburbs of Frisco and McKinney."
  },
  {
    name: "Greater Houston Area",
    cities: ["Houston", "The Woodlands", "Sugar Land", "Pearland", "Katy", "League City", "Baytown", "Pasadena", "Galveston", "Conroe"],
    description: "As Texas's largest metro, Houston demands reliable plumbing service. We serve the entire Greater Houston area including Galveston and The Woodlands."
  },
  {
    name: "Central Texas / Austin",
    cities: ["Austin", "San Marcos", "Round Rock", "Cedar Park", "Georgetown", "Pflugerville", "Kyle", "Leander", "Bastrop", "Taylor"],
    description: "Keep Austin flowing! Our Central Texas team serves the capital region from Georgetown to San Marcos and everywhere in between."
  },
  {
    name: "San Antonio & Hill Country",
    cities: ["San Antonio", "New Braunfels", "Boerne", "Seguin", "Kerrville", "Fredericksburg", "Universal City", "Schertz", "Cibolo", "Helotes"],
    description: "From the Alamo City to the beautiful Hill Country, we provide expert plumbing services throughout the San Antonio metro area."
  },
  {
    name: "West Texas",
    cities: ["El Paso", "Midland", "Odessa", "Lubbock", "Amarillo", "Abilene", "San Angelo", "Wichita Falls", "Big Spring", "Sweetwater"],
    description: "Even in the wide-open spaces of West Texas, quality plumbing service is just a phone call away. We serve communities across the region."
  },
  {
    name: "South Texas & Rio Grande Valley",
    cities: ["Corpus Christi", "McAllen", "Brownsville", "Laredo", "Harlingen", "Edinburg", "Mission", "Pharr", "Kingsville", "Victoria"],
    description: "From the Gulf Coast to the Rio Grande Valley, our South Texas team delivers the same quality service you expect from Texas Trusted Plumbers."
  }
];

const ServiceAreas = () => {
  return (
    <>
      <SEO 
        title="Service Areas - Plumbing Services Across Texas"
        description="Texas Trusted Plumbers serves all major Texas cities: Houston, Dallas, Austin, San Antonio, Fort Worth, El Paso, and more. Call (817) 555-1234."
      />

      {/* Hero */}
      <section className="hero-gradient text-primary-foreground py-16 lg:py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Service Areas Across Texas
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              From El Paso to Beaumont, Amarillo to Brownsville — Texas Trusted Plumbers provides fast, reliable service across the Lone Star State.
            </p>
            <Button variant="cta" size="xl" asChild>
              <a href={PHONE_LINK}>
                <Phone className="h-5 w-5" />
                Check Your Area: (817) 555-1234
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Coverage */}
      <section className="py-12 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {["Houston", "Dallas", "Austin", "San Antonio", "Fort Worth", "El Paso"].map((city) => (
              <div key={city} className="bg-card rounded-lg px-4 py-3 text-center shadow-soft">
                <MapPin className="h-5 w-5 text-accent mx-auto mb-1" />
                <span className="font-semibold text-sm">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regions */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Complete Texas Coverage
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              No matter where you are in Texas, professional plumbing help is just a call away.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {regions.map((region, i) => (
              <div key={i} className="bg-card rounded-xl p-6 shadow-soft border border-border">
                <div className="flex items-start gap-3 mb-4">
                  <div className="h-10 w-10 rounded-lg hero-gradient flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl">{region.name}</h3>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  {region.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {region.cities.map((city) => (
                    <span key={city} className="text-xs bg-secondary px-2 py-1 rounded">
                      {city}
                    </span>
                  ))}
                </div>
                <Button variant="ctaOutline" size="sm" asChild>
                  <a href={PHONE_LINK}>
                    <Phone className="h-4 w-4" />
                    Call for {region.cities[0]} Service
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Local Matters */}
      <section className="py-16 lg:py-20 bg-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Local Plumbers Who Know Texas
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Our technicians live and work in the communities they serve. They understand local building codes, common plumbing issues in Texas homes, and how to get the job done right.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                "Fast local response",
                "Know Texas codes",
                "Community focused"
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-center gap-2 bg-card rounded-lg px-4 py-3">
                  <CheckCircle className="h-5 w-5 text-trust" />
                  <span className="font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20">
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Don't See Your City?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            We're expanding our coverage every day. Call us to check if we serve your area — chances are, we do!
          </p>
          <Button variant="phone" size="xl" asChild>
            <a href={PHONE_LINK}>
              <Phone className="h-5 w-5" />
              Call (817) 555-1234
            </a>
          </Button>
        </div>
      </section>
    </>
  );
};

export default ServiceAreas;
