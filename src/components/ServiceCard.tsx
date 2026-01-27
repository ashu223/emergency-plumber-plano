import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { getPhoneLink } from "@/lib/city.config";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-card rounded-xl p-6 shadow-soft card-hover border border-border group">
      <div className="h-14 w-14 rounded-xl hero-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        <Icon className="h-7 w-7 text-primary-foreground" />
      </div>
      <h3 className="font-display font-bold text-lg mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{description}</p>
      <Button variant="ctaOutline" size="sm" asChild>
        <a href={getPhoneLink()}>
          <Phone className="h-4 w-4" />
          Call Now
        </a>
      </Button>
    </div>
  );
};

export default ServiceCard;
