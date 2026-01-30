import { MapPin, Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { siteConfig, getPhoneLink } from "@/lib/city.config";
const ServiceAreas = () => {
  return <>
      <SEO title={`Service Areas - ${siteConfig.businessName}`} description={`${siteConfig.businessName} serves ${siteConfig.city} and surrounding areas: ${siteConfig.nearbyAreas.slice(0, 5).join(", ")}. Call ${siteConfig.displayPhone}.`} />

      {/* Hero */}
      <section className="hero-gradient text-primary-foreground py-16 lg:py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              {siteConfig.headings.serviceAreasH1}
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              {siteConfig.headings.serviceAreasSubtitle}
            </p>
            <Button variant="cta" size="xl" asChild>
              <a href={getPhoneLink()}>
                <Phone className="h-5 w-5" />
                Check Your Area: {siteConfig.displayPhone}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Coverage */}
      <section className="py-12 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {siteConfig.nearbyAreas.slice(0, 5).map(city => <div key={city} className="bg-card rounded-lg px-4 py-3 text-center shadow-soft">
                <MapPin className="h-5 w-5 text-accent mx-auto mb-1" />
                <span className="font-semibold text-sm">{city}</span>
              </div>)}
          </div>
        </div>
      </section>

      {/* Regions */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              {siteConfig.headings.serviceAreasCoverageH2}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {siteConfig.headings.serviceAreasCoverageSubtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {siteConfig.regions.map((region, i) => <div key={i} className="bg-card rounded-xl p-6 shadow-soft border border-border">
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
                  {region.cities.map(city => <span key={city} className="text-xs bg-secondary px-2 py-1 rounded">
                      {city}
                    </span>)}
                </div>
                <Button variant="ctaOutline" size="sm" asChild>
                  <a href={getPhoneLink()}>
                    <Phone className="h-4 w-4" />
                    Call to Get Connected
                  </a>
                </Button>
              </div>)}
          </div>
        </div>
      </section>

      {/* Why Local Matters */}
      <section className="py-16 lg:py-20 bg-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              {siteConfig.headings.serviceAreasLocalH2}
            </h2>
            
            <div className="grid sm:grid-cols-3 gap-4">
              {siteConfig.headings.serviceAreasLocalFeatures.map((item, i) => <div key={i} className="flex items-center justify-center gap-2 bg-card rounded-lg px-4 py-3">
                  <CheckCircle className="h-5 w-5 text-trust" />
                  <span className="font-medium text-sm">{item}</span>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20">
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            {siteConfig.headings.serviceAreasCtaH2}
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            {siteConfig.headings.serviceAreasCtaSubtitle}
          </p>
          <Button variant="phone" size="xl" asChild>
            <a href={getPhoneLink()}>
              <Phone className="h-5 w-5" />
              Call {siteConfig.displayPhone}
            </a>
          </Button>
        </div>
      </section>
    </>;
};
export default ServiceAreas;