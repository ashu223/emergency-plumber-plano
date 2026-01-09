import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const PHONE_NUMBER = "(469) 581-3414";
const PHONE_LINK = "tel:+14695813414";

export const StickyCallButton = () => {
  return (
    <div className="sticky-cta">
      <Button variant="phone" size="xl" className="w-full" asChild>
        <a href={PHONE_LINK}>
          <Phone className="h-5 w-5" />
          CALL {PHONE_NUMBER}
        </a>
      </Button>
    </div>
  );
};

export default StickyCallButton;
