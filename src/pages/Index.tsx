import { siteConfig } from "@/lib/city.config";
import { plumberSchema } from "@/lib/plumberSchema";

import {
  Phone,
  Shield,
  Clock,
  Award,
  Star,
  Droplets,
  Wrench,
  Thermometer,
  PipetteIcon,
  Building2,
  CheckCircle,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { LeadForm } from "@/components/LeadForm";
import { ServiceCard } from "@/components/ServiceCard";
import { SEO } from "@/components/SEO";
import heroImage from "@/assets/hero-plumber.jpg";

const services = [
  {
    icon: Droplets,
    title: "Emergency Leak Repair",
    description:
      "Fast connection to plumbers for water leaks, 24/7. We stop the damage and fix it right the first time.",
  },
  {
    icon: Wrench,
    title: "Drain Cleaning",
    description: "Professional drain unclogging and cleaning services for sinks, toilets, and main lines.",
  },
  {
    icon: Thermometer,
    title: "Water Heater Repair",
    description: "Expert water heater repair and replacement. Tankless and traditional systems.",
  },
  {
    icon: PipetteIcon,
    title: "Pipe Replacement",
    description: "Complete pipe repair and repiping services for aging or damaged plumbing systems.",
  },
  {
    icon: Building2,
    title: "Commercial Plumbing",
    description: "Full-service commercial plumbing for businesses, restaurants, and office buildings.",
  },
  {
    icon: Wrench,
    title: "Sewer Line Services",
    description: "Sewer inspection, repair, and replacement using the latest technology.",
  },
];

{siteConfig.nearbyAreas.map((city) => (
  <div key={city} className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-3">
    <MapPin className="h-4 w-4 text-accent" />
    <span className="font-medium">{city}</span>
  </div>
))}

const Index = () => {
  return (
    <>
      <SEO schema={plumberSchema()} />

      {/* Hero Section */}
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Professional plumber at work" 
            fetchPriority="high"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 hero-gradient opacity-90"></div>
        </div>

        <div className="container relative z-10 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-primary-foreground">
              <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Clock className="h-4 w-4" />
                <span className="text-sm font-medium">24/7 Emergency Service Available</span>
              </div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {siteConfig.primaryKeyword} in {siteConfig.city}, {siteConfig.state} – Available 24/7
              </h1>

              <p className="text-lg md:text-xl opacity-90 mb-8 leading-relaxed">
                {siteConfig.serviceDescription} Serving {siteConfig.city}, {siteConfig.state}.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-2">
                <Button variant="cta" size="xl" asChild>
                  <a href={`tel:${siteConfig.phone}`>
                    <Phone className="h-5 w-5" />
                    Call {siteConfig.primaryKeyword} : {siteConfig.phone}
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="xl"
                  className="border-white/30 text-white hover:bg-white/10 hover:text-white"
                  asChild
                >
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
              <p className="text-xs opacity-60 mt-3">Credentials apply to independent service providers.</p>
            </div>

            <div className="hidden lg:block">{/* Space for hero image showing through */}</div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Why Choose {siteConfig.primaryKeyword} in {siteConfig.city}, {siteConfig.state}?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We're the trusted choice for thousands of Texas homeowners and businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, title: "Fast Response", desc: "Quick connection to available plumbers" },
              { icon: Shield, title: "Licensed Professionals", desc: "Independent, third-party providers" },
              { icon: Award, title: "Service Guarantees", desc: "Offered by service providers" },
              {
                icon: CheckCircle,
                title: "Transparent Estimates",
                desc: "Pricing shared by service providers before work begins",
              },
            ].map((item, i) => (
              <div key={i} className="bg-card rounded-xl p-6 text-center shadow-soft card-hover">
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">{siteConfig.primaryKeyword} Services in {siteConfig.city}, {siteConfig.state}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Plumbing Help Desk connects customers with independent plumbing professionals for the following services:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={i} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 lg:py-20 hero-gradient text-primary-foreground">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">{siteConfig.primaryKeyword} Near {siteConfig.city}, {siteConfig.state}</h2>
            <p className="opacity-90 text-lg max-w-2xl mx-auto">
              From the Panhandle to the Gulf Coast, we provide fast, reliable plumbing services statewide.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {cities.map((city) => (
              <div key={city} className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-3">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="font-medium">{city}</span>
              </div>
            ))}
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
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Need an {siteConfig.primaryKeyword}? We’ll Call You Back!</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Fill out the form and a licensed, independent plumbing professional may contact you shortly. within 15
                minutes. Available 24/7 for emergencies.
              </p>

              <div className="space-y-4">
                {[
                  "Free estimates on all services",
                  "No hidden fees or surprise charges",
                  "Same-day service available",
                  "Licensed and insured technicians",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-trust" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <LeadForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
