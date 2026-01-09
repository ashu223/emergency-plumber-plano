import { Star, Phone, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TestimonialCard } from "@/components/TestimonialCard";
import { SEO } from "@/components/SEO";

const PHONE_LINK = "tel:+18175551234";

const testimonials = [
  {
    name: "Mike Johnson",
    location: "Houston, TX",
    rating: 5,
    text: "Called at 2 AM with a burst pipe. They were at my door in 30 minutes and fixed it fast. True professionals who saved my home from major water damage. Can't thank them enough!"
  },
  {
    name: "Sarah Williams",
    location: "Dallas, TX",
    rating: 5,
    text: "Professional, on time, and fair pricing. They installed our new tankless water heater perfectly. The technician explained everything and even gave us tips for maintenance."
  },
  {
    name: "Robert Garcia",
    location: "Austin, TX",
    rating: 5,
    text: "Best plumbing service in Texas. They fixed our sewer line issue that three other companies couldn't figure out. Worth every penny for the peace of mind."
  },
  {
    name: "Jennifer Martinez",
    location: "San Antonio, TX",
    rating: 5,
    text: "Quick, clean, and affordable. They cleared our clogged drain in no time and cleaned up after themselves. The technician was friendly and professional."
  },
  {
    name: "David Thompson",
    location: "Fort Worth, TX",
    rating: 5,
    text: "Excellent emergency service. My water heater failed on a Sunday and they had a new one installed by Monday afternoon. Great communication throughout."
  },
  {
    name: "Amanda Chen",
    location: "Plano, TX",
    rating: 5,
    text: "We've used Plumbing Help Desk for three different jobs now. Always reliable, always fair. They're our go-to plumbers for any issue."
  },
  {
    name: "James Wilson",
    location: "Arlington, TX",
    rating: 5,
    text: "Had a major leak under my slab. They used camera technology to find it and fixed it with minimal disruption to my home. Impressive work!"
  },
  {
    name: "Maria Rodriguez",
    location: "El Paso, TX",
    rating: 5,
    text: "Even out here in El Paso, their service was excellent. The technician drove out the same day I called. True commitment to serving all of Texas."
  },
  {
    name: "Chris Brown",
    location: "Corpus Christi, TX",
    rating: 5,
    text: "Replaced all the old galvanized pipes in my 1960s home. The crew was professional and the job was done faster than quoted. Highly recommend!"
  },
  {
    name: "Lisa Anderson",
    location: "Lubbock, TX",
    rating: 5,
    text: "They fixed a tricky toilet issue that had been plaguing us for months. Fair price, great work. Will definitely use them again."
  }
];

const Reviews = () => {
  const averageRating = testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length;

  return (
    <>
      <SEO 
        title="Customer Reviews - 5-Star Rated Texas Plumbers"
        description="See why Texas homeowners trust us for plumbing. 5-star reviews from Houston, Dallas, Austin, San Antonio & more. Call (817) 555-1234."
      />

      {/* Hero */}
      <section className="hero-gradient text-primary-foreground py-16 lg:py-20">
        <div className="container">
          <div className="max-w-3xl">
            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-8 w-8 fill-warning text-warning" />
              ))}
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              5-Star Rated by Texas Homeowners
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Don't just take our word for it. See what our customers across Texas have to say about our plumbing services.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: "4.9/5", label: "Average Rating" },
              { number: "1,000+", label: "5-Star Reviews" },
              { number: "98%", label: "Would Recommend" },
              { number: "A+", label: "BBB Rating" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-accent mb-1">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Quote */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="h-12 w-12 text-accent mx-auto mb-6" />
            <blockquote className="text-2xl md:text-3xl font-display font-bold mb-6 leading-relaxed">
              "The most professional plumbing experience I've ever had. From the first phone call to the completed job, everything was perfect."
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                M
              </div>
              <div className="text-left">
                <p className="font-semibold">Mike Johnson</p>
                <p className="text-sm text-muted-foreground">Houston, TX</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Reviews */}
      <section className="py-16 lg:py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              What Our Customers Say
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real reviews from real Texas homeowners and businesses.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <TestimonialCard key={i} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20">
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Join Our Satisfied Customers
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Experience the Plumbing Help Desk difference for yourself. Call now for fast, reliable service.
          </p>
          <Button variant="phone" size="xl" asChild>
            <a href={PHONE_LINK}>
              <Phone className="h-5 w-5" />
              Call (817) 555-1234
            </a>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Reviews;
