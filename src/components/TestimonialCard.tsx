import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  text: string;
}

export const TestimonialCard = ({ name, location, rating, text }: TestimonialCardProps) => {
  return (
    <div className="bg-card rounded-xl p-6 shadow-soft card-hover border border-border">
      <div className="flex gap-1 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < rating ? "fill-warning text-warning" : "text-muted"
            }`}
          />
        ))}
      </div>
      <p className="text-foreground mb-4 text-sm leading-relaxed">"{text}"</p>
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-sm">{name}</p>
          <p className="text-xs text-muted-foreground">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
