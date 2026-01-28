import { siteConfig, getPhoneLink } from "@/lib/city.config";
import { plumberSchema } from "@/lib/plumberSchema";
import { Phone, Shield, Clock, Award, Star, Droplets, Wrench, Thermometer, PipetteIcon, Building2, CheckCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LeadForm } from "@/components/LeadForm";
import { ServiceCard } from "@/components/ServiceCard";
import { SEO } from "@/components/SEO";
import heroImage from "@/assets/hero-plumber.jpg";
// Map service titles to icons
const serviceIcons: Record<string, typeof Droplets> = {
  "Emergency Leak Repair": Droplets,
  "Drain Cleaning": Wrench,
  "Water Heater Repair": Thermometer,
  "Pipe Replacement": PipetteIcon,
  "Commercial Plumbing": Building2,
  "Sewer Line Services": Wrench,
};

// Map why choose feature titles to icons
const featureIcons: Record<string, typeof Clock> = {
  "Fast Response": Clock,
  "Licensed Professionals": Shield,
  "Service Guarantees": Award,
  "Transparent Estimates": CheckCircle,
};
const Index = () => {
  return <>
      <SEO title={siteConfig.metaTitle} description={siteConfig.metaDescription} schema={plumberSchema()} />

      {/* Hero Section */}
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImage} alt={`${siteConfig.primaryKeyword} in ${siteConfig.city}`} fetchPriority="high" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 hero-gradient opacity-90"></div>
        </div>

        <div className="container relative z-10 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-primary-foreground">
              <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Clock className="h-4 w-4" />
                <span className="text-sm font-medium">{siteConfig.hoursDisplay}</span>
              </div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {siteConfig.headings.homeH1}
              </h1>

              <p className="text-lg md:text-xl opacity-90 mb-8 leading-relaxed">
                {siteConfig.headings.homeSubtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-2">
                <Button variant="cta" size="xl" asChild>
                  <a href={getPhoneLink()} className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    <span>Call Now: {siteConfig.displayPhone}</span>
                  </a>
                </Button>
                <Button variant="outline" size="xl" className="border-white/30 text-white hover:bg-white/10 hover:text-white" asChild>
                  <a href="#lead-form">Get Connected Now</a>
                </Button>
              </div>

              <p className="text-sm opacity-80 mb-6 sm:text-left text-center sm:pl-0">Calls answered 24/7 • No obligation</p>

              <div className="flex flex-wrap gap-4">
                <div className="trust-badge">
                  <Shield className="h-4 w-4" />
                  Licensed
                </div>
                <div className="trust-badge">
                  <Award className="h-4 w-4" />
                  Fully Insured
                </div>
                <div className="trust-badge">
                  <Star className="h-4 w-4" />
                  5-Star Rated
                </div>
              </div>
              
            </div>

            <div className="hidden lg:block">{/* Space for hero image showing through */}</div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">{siteConfig.headings.whyChooseH2}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {siteConfig.headings.whyChooseSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.whyChooseFeatures.map((item, i) => {
              const Icon = featureIcons[item.title] || CheckCircle;
              return (
                <div key={i} className="bg-card rounded-xl p-6 text-center shadow-soft card-hover">
                  <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">{siteConfig.headings.servicesH2}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {siteConfig.headings.servicesSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.services.map((service, i) => {
              const Icon = serviceIcons[service.title] || Wrench;
              return <ServiceCard key={i} icon={Icon} title={service.title} description={service.description} />;
            })}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 lg:py-20 hero-gradient text-primary-foreground">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">{siteConfig.headings.serviceAreasH2}</h2>
            <p className="opacity-90 text-lg max-w-2xl mx-auto">
              {siteConfig.headings.serviceAreasSubtext}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {siteConfig.nearbyAreas.map(city => <div key={city} className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-3">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="font-medium">{city}</span>
              </div>)}
          </div>

          <div className="text-center">
            <Button variant="cta" size="lg" asChild>
              <a href="/service-areas">View All Service Areas</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section id="lead-form" className="py-16 lg:py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">{siteConfig.headings.leadFormH2}</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Fill out the form and a licensed, independent plumbing professional may contact you shortly within 15
                minutes. Available 24/7 for emergencies.
              </p>

              <div className="space-y-4">
                {["Free estimates on all services", "No hidden fees or surprise charges", "Same-day service available", "Licensed and insured technicians"].map((item, i) => <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-trust" />
                    <span>{item}</span>
                  </div>)}
              </div>
            </div>

            <LeadForm />
          </div>
        </div>
      </section>

      {/* External Link Section */}
      <section className="py-6 bg-secondary border-t border-border">
        <div className="container">
          <p className="text-center text-sm text-muted-foreground">
            {siteConfig.external.text}{" "}
            <a 
              href={siteConfig.external.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              {siteConfig.external.anchorText}
            </a>
            {siteConfig.external.textAfter}
          </p>
        </div>
      </section>
    </>;
};
export default Index;