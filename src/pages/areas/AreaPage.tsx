import { Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { siteConfig, getAreaPageConfig, getPhoneLink } from "@/lib/city.config";

interface AreaPageProps {
  areaName: string;
}

const AreaPage = ({ areaName }: AreaPageProps) => {
  const areaConfig = getAreaPageConfig(areaName);

  return (
    <>
      <SEO 
        title={`${siteConfig.primaryKeyword} ${areaName}, ${siteConfig.state} | ${siteConfig.businessName}`}
        description={`Need an emergency plumber in ${areaName}, ${siteConfig.state}? 24/7 fast plumbing repairs for leaks, drains, water heaters & sewer issues. Call now.`}
      />

      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground py-16 lg:py-20">
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <MapPin className="h-4 w-4" />
              <span className="text-sm font-medium">{areaName}, {siteConfig.state}</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              {areaConfig.h1}
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              {areaConfig.subtitle}
            </p>
            <Button variant="cta" size="xl" asChild>
              <a href={getPhoneLink()}>
                <Phone className="h-5 w-5" />
                Call Now: {siteConfig.displayPhone}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Article Section */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              {areaConfig.articleTitle}
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              {areaConfig.articleSubtitle}
            </p>
            <div className="prose prose-lg max-w-none text-foreground">
              {areaConfig.articleContent.map((paragraph, index) => (
                <p key={index} className="mb-6 leading-relaxed">
                  {paragraph}
                </p>
              ))}
              {areaConfig.internalLink && (
                <p className="mb-6 leading-relaxed">
                  {areaConfig.internalLink.textBefore}{" "}
                  <Link 
                    to={areaConfig.internalLink.url} 
                    className="text-primary hover:underline font-medium"
                  >
                    {areaConfig.internalLink.anchorText}
                  </Link>{" "}
                  {areaConfig.internalLink.textAfter}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Not Seeing Your Area CTA */}
      <section className="py-16 lg:py-20 bg-secondary">
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            {siteConfig.headings.areaPageCtaH2}
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            {siteConfig.headings.areaPageCtaSubtitle}
          </p>
          <Button variant="phone" size="xl" asChild>
            <a href={getPhoneLink()}>
              <Phone className="h-5 w-5" />
              Call {siteConfig.displayPhone}
            </a>
          </Button>
        </div>
      </section>
    </>
  );
};

export default AreaPage;
