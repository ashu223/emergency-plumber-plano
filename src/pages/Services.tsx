import { Droplets, Wrench, Thermometer, PipetteIcon, Building2, Search, Phone, CheckCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { siteConfig, getPhoneLink } from "@/lib/city.config";
const services = [{
  icon: AlertTriangle,
  title: "Emergency Plumbing Repairs",
  description: "We help connect homeowners with independent plumbing professionals who can handle emergency plumbing issues such as burst pipes, leaks, and backups.",
  features: ["30-minute average response", "Available 24/7/365", "Emergency leak containment", "Immediate repairs"]
}, {
  icon: Search,
  title: "Leak Detection & Repair",
  description: "We help connect homeowners with independent plumbing professionals who can handle emergency plumbing issues such as burst pipes, leaks, and backups.",
  features: ["Non-invasive detection", "Electronic leak locators", "Slab leak specialists", "Insurance documentation"]
}, {
  icon: Droplets,
  title: "Drain Cleaning & Unclogging",
  description: "We help connect customers with plumbing professionals offering drain cleaning and unclogging services.",
  features: ["Hydro-jetting available", "Camera inspection", "Root removal", "Preventive maintenance"]
}, {
  icon: Thermometer,
  title: "Water Heater Repair & Replacement",
  description: "No hot water? We help connect customers with licensed plumbing professionals who handle repair and replacement of all types of water heaters.",
  features: ["All brands serviced", "Tankless specialists", "Energy-efficient options", "Same-day installation"]
}, {
  icon: PipetteIcon,
  title: "Pipe Repair & Repiping",
  description: "Whether you need a quick pipe repair or complete home repiping, our experts handle it all. We work with copper, PEX, PVC, and galvanized pipes.",
  features: ["Trenchless options", "Whole-home repiping", "Frozen pipe repair", "Pipe insulation"]
}, {
  icon: Wrench,
  title: "Sewer Line Services",
  description: "Complete sewer line solutions from inspection to replacement. We use video camera technology to diagnose issues and provide the most cost-effective solutions.",
  features: ["Video inspection", "Trenchless repair", "Root intrusion removal", "Line replacement"]
}, {
  icon: Building2,
  title: "Commercial Plumbing Solutions",
  description: "Keep your business running with our commercial plumbing services. We serve restaurants, offices, retail spaces, and industrial facilities.",
  features: ["Minimal disruption", "Code compliance", "Scheduled maintenance", "Emergency response"]
}];
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
            {services.map((service, i) => <div key={i} className={`grid lg:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-xl hero-gradient flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h2 className="font-display text-2xl md:text-3xl font-bold">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, j) => <div key={j} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-trust flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>)}
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
                    <service.icon className="h-24 w-24 text-primary/30" />
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 hero-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Need Plumbing Service Today?
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