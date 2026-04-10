import Navigation from "@/components/Navigation";
import { Star } from "lucide-react";
import { Link } from "wouter";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Yash Pawar",
      title: "Homeowner, Buldhana",
      content:
        "DM Interiors completely transformed our living space. The attention to detail and professionalism was outstanding. Highly recommended!",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh",
    },
    {
      name: "Amit Sule",
      title: "Business Owner, Pune",
      content:
        "We hired DM Interiors for our office renovation. The team was punctual, creative, and delivered exactly what we envisioned. Great experience!",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
    },
    {
      name: "Manthan Shinde",
      title: "Homeowner, Udgir",
      content:
        "The furniture quality is exceptional and the design suggestions were perfect for our home. Best investment we made!",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amit",
    },
    {
      name: "Neha Sawale",
      title: "Interior Enthusiast, Pune",
      content:
        "From consultation to installation, everything was seamless. The team understood our requirements perfectly and delivered beyond expectations.",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Neha",
    },
    {
      name: "Shubham",
      title: "Homeowner, Udgir",
      content:
        "Outstanding service and quality. The warranty and after-sales support make DM Interiors stand out from competitors.",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram",
    },
    {
      name: "Jai Tai",
      title: "Homeowner, Pune",
      content:
        "Professional, courteous, and creative. They made our dream home a reality. We couldn't be happier with the results!",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anjali",
    },
    {
      name: "Rohan K",
      title: "Corporate Client, Mulshi, Pune",
      content:
        "The team delivered a stunning office space on time and within budget. Their expertise in commercial design is impressive.",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sanjay",
    },
    {
      name: "Meera Iyer",
      title: "Homeowner, Pune",
      content:
        "Excellent craftsmanship and attention to detail. The free maintenance service for a year is a great added benefit!",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 animate-fade-in-up">
            Customer Testimonials
          </h1>
          <p className="text-center text-muted-foreground text-lg animate-fade-in-up stagger-1">
            Hear from our satisfied clients across Maharashtra
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { number: "10,000+", label: "Happy Customers" },
              { number: "100%", label: "Satisfaction Rate" },
              { number: "20+", label: "Years of Trust" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="premium-card text-center hover-lift animate-fade-in-scale"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <p className="text-5xl font-bold text-accent mb-2">{stat.number}</p>
                <p className="text-lg text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="premium-card hover-lift flex flex-col h-full animate-fade-in-up"
                style={{ animationDelay: `${(idx % 4) * 0.1}s` }}
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-accent text-accent" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 flex-grow italic">"{testimonial.content}"</p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in-up">
            Why Our Customers Love Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Quality Assurance",
                description:
                  "We maintain the highest standards of quality in every project. Our rigorous quality checks ensure perfection.",
              },
              {
                title: "Professional Team",
                description:
                  "Our experienced designers and craftsmen bring expertise and creativity to every project.",
              },
              {
                title: "Timely Delivery",
                description:
                  "We respect your time and deliver projects on schedule without compromising quality.",
              },
              {
                title: "Excellent Support",
                description:
                  "Our after-sales service and warranty coverage provide peace of mind and long-term support.",
              },
              {
                title: "Custom Solutions",
                description:
                  "We tailor every design to your unique needs and preferences, not one-size-fits-all solutions.",
              },
              {
                title: "Competitive Pricing",
                description:
                  "Premium quality at affordable prices. We believe luxury should be accessible to everyone.",
              },
            ].map((reason, idx) => (
              <div
                key={idx}
                className="premium-card hover-lift animate-fade-in-up"
                style={{ animationDelay: `${(idx % 3) * 0.1}s` }}
              >
                <h3 className="text-2xl font-bold mb-3 text-accent">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in-up">
            Ready to Join Our Happy Customers?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto animate-fade-in-up stagger-1">
            Let us transform your space into something extraordinary
          </p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-accent-foreground text-accent rounded-lg font-semibold hover:bg-accent-foreground/90 transition-colors animate-fade-in-up stagger-2">
            Start Your Project
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2026 DM Interiors and Furnitures. All rights reserved.</p>
          <p className="text-sm mt-2 opacity-75">Premium Interior Design & Furniture Solutions</p>
        </div>
      </footer>
    </div>
  );
}
