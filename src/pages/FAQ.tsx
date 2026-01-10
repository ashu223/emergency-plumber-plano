import { Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SEO } from "@/components/SEO";

const PHONE_LINK = "tel:+14695813414";

const faqs = [
  {
    question: "What cities in Texas do you serve?",
    answer: "Plumbing Help Desk connects customers with independent plumbing professionals across Texas, including Houston, Dallas, Fort Worth, Austin, San Antonio, El Paso, Corpus Christi, Lubbock, Amarillo, and many surrounding areas. Service availability depends on independent providers. Call us to confirm coverage in your area."
  },
  {
    question: "Are the plumbers you connect me with licensed and insured?",
    answer: "Yes. The independent plumbing professionals in our network hold valid Texas state plumbing licenses and maintain their own insurance coverage, including liability and workers' compensation, as required by law. You may request license or insurance details directly from the service provider."
  },
  {
    question: "Do you offer 24/7 emergency plumbing services?",
    answer: "Yes. We connect customers with independent plumbing professionals who offer 24/7 emergency services, including nights, weekends, and holidays. Availability and response times may vary by location and provider."
  },
  {
    question: "How fast is emergency response time?",
    answer: "Emergency response times are determined by the independent service provider and your location. In major metro areas, many providers offer rapid response, often within 30–60 minutes. Rural response times may vary."
  },
  {
    question: "Do you provide free estimates?",
    answer: "Many independent plumbing professionals in our network offer free or upfront estimates. Pricing, service fees, and diagnostic charges are determined solely by the service provider and will be discussed with you before work begins."
  },
  {
    question: "What payment methods are accepted?",
    answer: "Payment methods are set by the independent plumbing professional you choose. Most providers accept major credit cards, debit cards, checks, and cash. Financing options may be available for larger projects, depending on the provider."
  },
  {
    question: "Do you guarantee the work?",
    answer: "Any warranties or guarantees are provided directly by the independent plumbing professional who performs the work. Plumbing Help Desk does not provide warranties or guarantees for third-party services."
  },
  {
    question: "Can you help with commercial plumbing?",
    answer: "Yes. We connect businesses with independent plumbing professionals who provide commercial plumbing services for offices, restaurants, retail spaces, and other commercial facilities."
  },
  {
    question: "What should I do if I have a burst pipe?",
    answer: "First, shut off your main water supply to prevent further damage. Then call us immediately at (469) 581-3414 so we can connect you with an available emergency plumbing professional in your area."
  },
  {
    question: "Do you install tankless water heaters?",
    answer: "We connect customers with independent plumbing professionals who install, repair, and maintain tank, tankless, and hybrid water heater systems. The specific services offered depend on the provider."
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
            Our team is available 24/7 to help connect you with an independent plumbing professional. Call anytime to get started.
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
