import { Phone, Mail, MapPin, Clock, Shield, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig, getPhoneLink } from "@/lib/city.config";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact Us" },
];

const services = [
  "Emergency Plumbing",
  "Leak Detection",
  "Drain Cleaning",
  "Water Heater Repair",
  "Pipe Repair",
  "Sewer Services",
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main footer */}
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-lg bg-primary-foreground flex items-center justify-center">
                <span className="text-xl font-bold text-primary">{siteConfig.logoText}</span>
              </div>
              <div>
                <span className="font-display font-bold text-lg">{siteConfig.primaryKeyword}</span>
                <span className="block text-sm opacity-80 -mt-1">{siteConfig.city}, {siteConfig.state}</span>
              </div>
            </div>
            <p className="text-sm opacity-80 mb-4">
              {siteConfig.footerTagline}
            </p>
            <div className="flex gap-3">
              <div className="flex items-center gap-1 text-xs bg-white/10 px-2 py-1 rounded">
                <Shield className="h-4 w-4" />
                Licensed
              </div>
              <div className="flex items-center gap-1 text-xs bg-white/10 px-2 py-1 rounded">
                <Award className="h-4 w-4" />
                Insured
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a href={getPhoneLink()} className="flex items-center gap-3 hover:text-accent transition-colors">
                <Phone className="h-5 w-5 text-accent" />
                <span className="font-semibold">{siteConfig.displayPhone}</span>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 hover:text-accent transition-colors"
              >
                <Mail className="h-5 w-5 text-accent" />
                <span className="text-sm">{siteConfig.email}</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm opacity-80">{siteConfig.address.full}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-accent" />
                <span className="text-sm opacity-80">{siteConfig.hoursDisplay}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container py-6">
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
              <p className="text-sm opacity-80">© {currentYear} {siteConfig.businessName}. All rights reserved.</p>
              <div className="flex items-center gap-4">
                {legalLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <p className="text-xs opacity-70 text-center">
              {siteConfig.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
