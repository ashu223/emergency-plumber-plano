import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SEO } from "@/components/SEO";
import { siteConfig, getPhoneLink } from "@/lib/city.config";

const FAQ = () => {
  return <>
      <SEO title={`FAQ - ${siteConfig.businessName}`} description={`Get answers to common plumbing questions: service areas, emergency response, pricing, and more. ${siteConfig.businessName} - Call ${siteConfig.displayPhone}.`} />

      {/* Hero */}
      <section className="hero-gradient text-primary-foreground py-16 lg:py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              {siteConfig.headings.faqH1}
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              {siteConfig.headings.faqSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {siteConfig.faqItems.map((faq, i) => <AccordionItem key={i} value={`item-${i}`} className="bg-card rounded-xl border border-border px-6 shadow-soft">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>)}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 lg:py-20 bg-secondary">
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            {siteConfig.headings.faqCtaH2}
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            {siteConfig.headings.faqCtaSubtitle}
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
export default FAQ;
