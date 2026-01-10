import { Shield, Award, Clock, Users, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

const PHONE_LINK = "tel:+14695813414";

const About = () => {
  return (
    <>
      <SEO
        title="About Us - Licensed Texas Plumbers"
        description="Plumbing Help Desk: Licensed, insured, and serving Texas for over 15 years. Learn about our team and commitment to quality plumbing service."
      />

      {/* Hero */}
      <section className="hero-gradient text-primary-foreground py-16 lg:py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">About Plumbing Help Desk</h1>
            <p className="text-lg md:text-xl opacity-90">
              Plumbing Help Desk helps Texas homeowners get connected with independent, licensed plumbing professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: "15+", label: "Years Experience" },
              { number: "50,000+", label: "Jobs Completed" },
              { number: "100%", label: "Satisfaction Rate" },
              { number: "24/7", label: "Emergency Service" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-accent mb-1">{stat.number}</div>
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
                <p>
                  Plumbing Help Desk was founded with a simple belief: every Texan deserves access to honest, reliable
                  plumbing service. What started as a family operation in Fort Worth has grown into one of Texas's most
                  trusted plumbing companies.
                </p>
                <p>
                  Our team of licensed professionals brings decades of combined experience to every job. Whether it's a
                  midnight emergency or a planned renovation, we treat every customer's home like our own.
                </p>
                <p>
                  Today, we serve communities across the entire state of Texas, from the bustling metros of Houston and
                  Dallas to the smaller towns that make Texas great. Our commitment to quality workmanship and customer
                  satisfaction has never wavered.
                </p>
              </div>
            </div>

            <div className="bg-secondary rounded-2xl p-8">
              <h3 className="font-display text-2xl font-bold mb-6">Our Values</h3>
              <div className="space-y-4">
                {[
                  { icon: Shield, title: "Integrity", desc: "Honest pricing with no hidden fees" },
                  { icon: Award, title: "Excellence", desc: "Top-quality work on every job" },
                  { icon: Clock, title: "Reliability", desc: "On-time, every time" },
                  { icon: Users, title: "Respect", desc: "Treating your home like our own" },
                ].map((value, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="h-12 w-12 rounded-lg hero-gradient flex items-center justify-center flex-shrink-0">
                      <value.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{value.title}</h4>
                      <p className="text-sm text-muted-foreground">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 lg:py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Independent Plumbing Professionals</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Service providers in our network are independent businesses who maintain their own licensing and
              insurance. Plumbing Help Desk does not employ or supervise plumbers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "State Licensed", desc: "All plumbers hold valid Texas state plumbing licenses" },
              { title: "Fully Insured", desc: "Comprehensive liability and worker's compensation coverage" },
              { title: "Background Checked", desc: "Every technician passes thorough background screening" },
            ].map((item, i) => (
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
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Ready to Experience the Difference?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied Texas homeowners. Get Connected with a Local Plumber.
          </p>
          <Button variant="phone" size="xl" asChild>
            <a href={PHONE_LINK}>
              <Phone className="h-5 w-5" />
              Call (469) 581-3414
            </a>
          </Button>
        </div>
      </section>
    </>
  );
};

export default About;
