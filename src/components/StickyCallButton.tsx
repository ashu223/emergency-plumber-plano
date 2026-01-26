import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/city.config";

export const StickyCallButton = () => {
  return (
    <div className="sticky-cta">
      <Button variant="phone" size="xl" className="w-full" asChild>
        <a href={`tel:${siteConfig.phone}`}>
          <Phone className="h-5 w-5" />
          CALL {siteConfig.displayPhone}
        </a>
      </Button>
    </div>
  );
};

export default StickyCallButton;
