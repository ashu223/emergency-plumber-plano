import { Droplets, Wrench, Thermometer, PipetteIcon, Building2, Search, Phone, CheckCircle, AlertTriangle, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { siteConfig, getPhoneLink } from "@/lib/city.config";

// Icon mapping for dynamic rendering
const iconMap: Record<string, LucideIcon> = {
  AlertTriangle,
  Search,
  Droplets,
  Thermometer,
  PipetteIcon,
  Wrench,
  Building2,
};
const Services = () => {
  return <>
      <SEO title={`Plumbing Services - ${siteConfig.businessName}`} description={`Full-service plumbing in ${siteConfig.city}, ${siteConfig.state}: emergency repairs, leak detection, drain cleaning, water heater service, and more. Call ${siteConfig.displayPhone} for service.`} />

      {/* Hero */}
      <section className="hero-gradient text-primary-foreground py-16 lg:py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              {siteConfig.headings.servicesH1}
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              {siteConfig.headings.servicesSubtitle}
            </p>
            <Button variant="cta" size="xl" asChild>
              <a href={getPhoneLink()}>
                <Phone className="h-5 w-5" />
                Call for Plumbing Help
              </a>
            </Button>
            
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="space-y-12">
            {siteConfig.servicesPage.map((service, i) => {
              const IconComponent = iconMap[service.icon] || AlertTriangle;
              return (
                <div key={i} className={`grid lg:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-12 w-12 rounded-xl hero-gradient flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <h2 className="font-display text-2xl md:text-3xl font-bold">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-trust flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button variant="cta" asChild>
                      <a href={getPhoneLink()}>
                        <Phone className="h-4 w-4" />
                        {service.title.includes('Commercial') ? 'Call for Plumbing Help' : 'Call to Get Connected'}
                      </a>
                    </Button>
                  </div>
                  <div className={`bg-secondary rounded-2xl p-8 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="aspect-video bg-primary/10 rounded-xl flex items-center justify-center">
                      <IconComponent className="h-24 w-24 text-primary/30" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 hero-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            {siteConfig.headings.servicesCtaH2}
          </h2>
          
          <Button variant="cta" size="xl" asChild>
            <a href={getPhoneLink()}>
              <Phone className="h-5 w-5" />
              {siteConfig.displayPhone}
            </a>
          </Button>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-6 bg-muted/50 border-t">
        <div className="container">
          
        </div>
      </section>
    </>;
};
export default Services;