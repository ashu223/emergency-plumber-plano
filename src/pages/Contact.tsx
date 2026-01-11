import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { SEO } from "@/components/SEO";

const PHONE_NUMBER = "(469) 581-3414";
const PHONE_LINK = "tel:+14695813414";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      <SEO
        title="Contact Us - Get in Touch with Texas Plumbers"
        description="Contact Plumbing Help Desk for fast plumbing service. Call (469) 581-3414 or fill out our form. Available 24/7 for emergencies."
      />

      {/* Hero */}
      <section className="hero-gradient text-primary-foreground py-16 lg:py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg md:text-xl opacity-90">
              Need Plumbing Help? Get Connected 24/7. We help connect Texas homeowners and businesses with independent plumbing professionals. Call anytime to get connected.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-display text-3xl font-bold mb-6">Get in Touch</h2>

              <div className="space-y-6 mb-8">
                <a href={PHONE_LINK} className="flex items-start gap-4 group">
                  <div className="h-12 w-12 rounded-xl hero-gradient flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold group-hover:text-accent transition-colors">Phone</p>
                    <p className="text-2xl font-display font-bold text-accent">{PHONE_NUMBER}</p>
                    <p className="text-sm text-muted-foreground">Available 24/7</p>
                  </div>
                </a>

                <a href="mailto:support@plumbinghelpdesk.com" className="flex items-start gap-4 group">
                  <div className="h-12 w-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold group-hover:text-accent transition-colors">Email</p>
                    <p className="text-foreground">support@plumbinghelpdesk.com</p>
                    <p className="text-sm text-muted-foreground">Response within 24 hours</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Office Address</p>
                    <p className="text-foreground">1617 Park Pl Ave</p>
                    <p className="text-foreground">Fort Worth, TX 76110</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Hours</p>
                    <p className="text-foreground">Emergency Service: 24/7</p>
                    <p className="text-muted-foreground text-sm">Office: Mon-Fri 8am-6pm</p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-secondary rounded-xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary/30 mx-auto mb-2" />
                  <p className="text-muted-foreground text-sm">Map: Fort Worth, TX</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-xl p-6 md:p-8 shadow-elevated border border-border">
              <h2 className="font-display text-2xl font-bold mb-2">Send Us a Message</h2>
              <p className="text-muted-foreground mb-6">Fill out the form and we'll get back to you within 24 hours.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Name *</label>
                    <Input type="text" placeholder="Your name" required className="h-12" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Phone *</label>
                    <Input type="tel" placeholder="(555) 555-5555" required className="h-12" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Email</label>
                  <Input type="email" placeholder="your@email.com" className="h-12" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Service Needed</label>
                  <Input type="text" placeholder="e.g., Leak repair, drain cleaning" className="h-12" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Message *</label>
                  <Textarea
                    placeholder="Describe your plumbing issue..."
                    required
                    className="min-h-[120px] resize-none"
                  />
                </div>
                <Button type="submit" variant="cta" size="xl" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-border text-center">
                <p className="text-sm text-muted-foreground mb-2">Need immediate help? Call now:</p>
                <Button variant="phone" size="lg" asChild>
                  <a href={PHONE_LINK}>
                    <Phone className="h-5 w-5" />
                    {PHONE_NUMBER}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
