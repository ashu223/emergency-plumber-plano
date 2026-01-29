import { Shield, Award, Clock, Users, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { siteConfig, getPhoneLink } from "@/lib/city.config";
const About = () => {
  return <>
      <SEO title={`About Us - ${siteConfig.businessName}`} description={`${siteConfig.businessName}: Licensed, insured plumbers serving ${siteConfig.city}, ${siteConfig.state}. Learn about our commitment to quality plumbing service.`} />

      {/* Hero */}
      <section className="hero-gradient text-primary-foreground py-16 lg:py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">{siteConfig.headings.aboutH1}</h1>
            <p className="text-lg md:text-xl opacity-90">
              {siteConfig.headings.aboutSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.aboutStats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-display text-sm md:text-base font-bold text-accent mb-1">{stat.number}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                {siteConfig.aboutStory.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="bg-secondary rounded-2xl p-8">
              <h3 className="font-display text-2xl font-bold mb-6">Our Values</h3>
              <div className="space-y-4">
                {siteConfig.aboutValues.map((value, i) => {
                  const icons = [Shield, Award, Clock, Users];
                  const Icon = icons[i];
                  return (
                    <div key={i} className="flex gap-4">
                      <div className="h-12 w-12 rounded-lg hero-gradient flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{value.title}</h4>
                        <p className="text-sm text-muted-foreground">{value.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 lg:py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">{siteConfig.aboutCredentials.title}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {siteConfig.aboutCredentials.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {siteConfig.aboutCredentials.items.map((item, i) => (
              <div key={i} className="bg-card rounded-xl p-6 text-center shadow-soft">
                <CheckCircle className="h-10 w-10 text-trust mx-auto mb-4" />
                <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20">
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">{siteConfig.headings.aboutCtaH2}</h2>
          
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
export default About;