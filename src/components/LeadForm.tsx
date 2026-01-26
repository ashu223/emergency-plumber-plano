import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Send, CheckCircle } from "lucide-react";
import { siteConfig } from "@/lib/city.config";


export const LeadForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Request Received!",
      description: "We'll call you back within 15 minutes.",
    });
  };

  if (isSubmitted) {
    return (
      <div className="bg-card rounded-xl p-8 shadow-elevated text-center">
        <div className="w-16 h-16 bg-trust/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="h-8 w-8 text-trust" />
        </div>
        <h3 className="font-display font-bold text-xl mb-2">Thank You!</h3>
        <p className="text-muted-foreground mb-4">
          We've received your request and will call you back within 15 minutes.
        </p>
        <p className="text-sm text-muted-foreground">
          Need immediate help? Call us now:
        </p>
        <a
          href="tel:+14695813414"
          className="text-accent font-bold text-lg hover:underline"
        >
          (469) 581-3414
        </a>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-xl p-6 md:p-8 shadow-elevated">
      <div className="text-center mb-6">
        <h3 className="font-display font-bold text-xl md:text-2xl mb-2">
          Get a Call Back Now
        </h3>
        <p className="text-muted-foreground text-sm">
          Fill out the form and we'll call you within 15 minutes
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            type="text"
            placeholder="Your Name *"
            required
            className="h-12"
          />
        </div>
        <div>
          <Input
            type="tel"
            placeholder="Phone Number *"
            required
            className="h-12"
          />
        </div>
        <div>
          <Input
            type="text"
            placeholder="Service Needed (e.g., Leak Repair)"
            className="h-12"
          />
        </div>
        <div>
          <Textarea
            placeholder="Brief description of your issue..."
            className="min-h-[80px] resize-none"
          />
        </div>
        <Button
          type="submit"
          variant="cta"
          size="xl"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            "Sending..."
          ) : (
            <>
              <Send className="h-5 w-5" />
              Request Call Back
            </>
          )}
        </Button>
      </form>

      <div className="mt-6 pt-6 border-t border-border text-center">
        <p className="text-sm text-muted-foreground mb-2">
          Or call us directly:
        </p>
        <Button variant="phone" size="lg" asChild>
          <a href={`tel:${siteConfig.phone.tel}`}>
            <Phone className="h-5 w-5" />
            CALL {siteConfig.phone.display}
          </a>
        </Button>
      </div>
    </div>
  );
};

export default LeadForm;
