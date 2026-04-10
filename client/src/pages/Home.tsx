import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Truck, Award, Wrench, Gift, MapPin, Phone, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/photos/homepage.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Transform Your Space
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in-up stagger-1">
            Premium Interior Design & Furniture Solutions for Your Dream Home
          </p>
          <Link href="/portfolio" className="animate-fade-in-up stagger-2 inline-block">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-lg">
              Explore Our Work
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in-up">
            Our Premium Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Truck,
                title: "Free Home Delivery",
                description: "Complimentary delivery to your doorstep across Pune",
              },
              {
                icon: Award,
                title: "15 Years Warranty On Commercials Furniture",
                description: "Extended warranty coverage on selected furniture items",
              },
              {
                icon: Wrench,
                title: "Repair Services",
                description: "Quick repair and maintenance within 24 hours",
              },
              {
                icon: Gift,
                title: "1 Year Free Service",
                description: "Complimentary maintenance for interior & furniture",
              },
            ].map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="premium-card hover-lift animate-fade-in-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <Icon className="w-12 h-12 text-accent mb-4 mx-auto" />
                  <h3 className="text-xl font-bold mb-2 text-center">{service.title}</h3>
                  <p className="text-muted-foreground text-center text-sm">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { number: "20+", label: "Years of Experience" },
              { number: "10,000+", label: "Happy Customers" },
              { number: "1,000+", label: "Customers Per Year" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="text-center animate-fade-in-scale"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <p className="text-5xl md:text-6xl font-bold text-accent mb-2">{stat.number}</p>
                <p className="text-lg text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in-up">
            Our Branches
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                name: "Main Branch",
                location: "Udgir, Maharashtra",
                address: "DM Interiors & Furnitures, Udgir",
                phone: "+91 8208326652",
                email: "dmfurniture55@gmail.com",
              },
              {
                name: "Pune Branch",
                location: "Pune, Maharashtra",
                address: "DM Interiors & Furnitures, Pune",
                phone: "+91 7083871807",
                email: "dmfurniture55@gmail.com",
              },
            ].map((branch, idx) => (
              <div
                key={idx}
                className="premium-card hover-lift animate-slide-in-left"
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                <h3 className="text-2xl font-bold mb-4 text-accent">{branch.name}</h3>
                <div className="space-y-3 text-foreground">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">{branch.location}</p>
                      <p className="text-sm text-muted-foreground">{branch.address}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                    <p className="text-sm">{branch.phone}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                    <p className="text-sm">{branch.email}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto animate-fade-in-up stagger-1">
            Contact us today for a free consultation and let our experts help you create your dream interior
          </p>
          <Link href="/contact" className="animate-fade-in-up stagger-2 inline-block">
            <Button className="bg-accent-foreground text-accent hover:bg-accent-foreground/90 px-8 py-6 text-lg">
              Get in Touch
            </Button>
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
