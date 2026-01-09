import { Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SEO } from "@/components/SEO";

const PHONE_LINK = "tel:+14695813414";

const faqs = [
  {
    question: "What cities in Texas do you serve?",
    answer: "We serve all major cities and communities across Texas, including Houston, Dallas, Fort Worth, Austin, San Antonio, El Paso, Corpus Christi, Lubbock, Amarillo, and everywhere in between. If you're in Texas, we can help! Call us to confirm service in your specific area."
  },
  {
    question: "Are you licensed and insured in Texas?",
    answer: "Yes! All of our plumbers hold valid Texas state plumbing licenses. We are fully insured with comprehensive liability coverage and worker's compensation insurance. You can request to see our credentials at any time."
  },
  {
    question: "Do you offer 24/7 emergency plumbing services?",
    answer: "Absolutely! Plumbing emergencies don't wait for business hours, and neither do we. Our emergency plumbers are available 24 hours a day, 7 days a week, 365 days a year. We typically arrive within 30-60 minutes for emergencies."
  },
  {
    question: "Do you provide free estimates?",
    answer: "Yes, we provide free estimates for most plumbing jobs. For standard services, we'll give you an upfront price before any work begins. For more complex issues that require diagnosis, there may be a service call fee that is waived if you proceed with the repair."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express, Discover), debit cards, checks, and cash. We also offer financing options for larger projects like water heater installations or whole-home repiping."
  },
  {
    question: "How quickly can you respond to a plumbing emergency?",
    answer: "For true emergencies like burst pipes or sewage backups, our average response time is 30 minutes in metro areas. In more rural parts of Texas, we still aim to arrive within 60-90 minutes. We prioritize emergencies to minimize damage to your home."
  },
  {
    question: "Do you guarantee your work?",
    answer: "Yes! We stand behind all our work with a 100% satisfaction guarantee. Most repairs come with a 1-year warranty on labor, and we honor all manufacturer warranties on parts and equipment we install."
  },
  {
    question: "Can you help with commercial plumbing?",
    answer: "Absolutely! We provide full commercial plumbing services for businesses of all sizes, including restaurants, offices, retail stores, and industrial facilities. We understand the importance of minimizing downtime for your business."
  },
  {
    question: "What should I do if I have a burst pipe?",
    answer: "First, locate your main water shut-off valve and turn it off to stop the water flow. Then call us immediately at (469) 581-3414. While waiting, try to move valuables away from the water and use towels or buckets to contain the water if safe to do so."
  },
  {
    question: "Do you install tankless water heaters?",
    answer: "Yes! We install, repair, and maintain all types of water heaters including traditional tank models, tankless (on-demand) systems, and hybrid heat pump water heaters. We can help you choose the best option for your home and budget."
  }
];

const FAQ = () => {
  return (
    <>
      <SEO 
        title="FAQ - Common Plumbing Questions Answered"
        description="Get answers to common plumbing questions: service areas, emergency response, pricing, and more. Plumbing Help Desk - Call (469) 581-3414."
      />

      {/* Hero */}
      <section className="hero-gradient text-primary-foreground py-16 lg:py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Got questions? We've got answers. If you don't see what you're looking for, give us a call — we're happy to help.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem 
                  key={i} 
                  value={`item-${i}`}
                  className="bg-card rounded-xl border border-border px-6 shadow-soft"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 lg:py-20 bg-secondary">
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Still Have Questions?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Our friendly team is here to help. Call us anytime — we're available 24/7 to answer your plumbing questions.
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

export default FAQ;
