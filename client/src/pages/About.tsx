import Navigation from "@/components/Navigation";
import { Award, Users, Home, TrendingUp } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 animate-fade-in-up">
            About DM Interiors & Furnitures
          </h1>
          <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up stagger-1">
            Two decades of excellence in transforming spaces and creating memorable experiences
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 animate-fade-in-up">Our Story</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p className="animate-fade-in-up stagger-1">
                Founded with a vision to revolutionize interior design and furniture solutions in Maharashtra, DM Interiors & Furnitures has grown from a small studio to a trusted name serving thousands of satisfied customers across the state.
              </p>
              <p className="animate-fade-in-up stagger-2">
                Over the past 20+ years, we have dedicated ourselves to understanding our clients' needs and delivering exceptional results that exceed expectations. Every project, whether residential or commercial, receives the same level of attention and care.
              </p>
              <p className="animate-fade-in-up stagger-3">
                Our commitment to quality, innovation, and customer satisfaction has made us the preferred choice for interior design and furniture solutions in Udgir and Pune.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in-up">
            By The Numbers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                number: "20+",
                label: "Years of Experience",
                description: "Serving the community with excellence",
              },
              {
                icon: Users,
                number: "10,000+",
                label: "Total Customers",
                description: "Happy clients across Maharashtra",
              },
              {
                icon: Home,
                number: "1,000+",
                label: "Customers Per Year",
                description: "Growing client base annually",
              },
              {
                icon: TrendingUp,
                number: "100%",
                label: "Satisfaction Rate",
                description: "Committed to excellence",
              },
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="premium-card hover-lift text-center animate-fade-in-scale"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <Icon className="w-12 h-12 text-accent mx-auto mb-4" />
                  <p className="text-4xl font-bold text-accent mb-2">{stat.number}</p>
                  <p className="font-semibold mb-2">{stat.label}</p>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Our Mission",
                content:
                  "To transform ordinary spaces into extraordinary experiences by combining innovative design, premium materials, and exceptional craftsmanship. We are committed to understanding our clients' unique needs and delivering solutions that enhance their lifestyle and reflect their personality.",
              },
              {
                title: "Our Vision",
                content:
                  "To be the most trusted and preferred interior design and furniture company in Maharashtra, known for our unwavering commitment to quality, innovation, and customer satisfaction. We aspire to set new standards in the industry and inspire others through our work.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="premium-card hover-lift animate-slide-in-left"
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                <h3 className="text-3xl font-bold mb-6 text-accent">{item.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in-up">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality",
                description: "We never compromise on quality. Every material, every design, every detail is carefully selected and executed to the highest standards.",
              },
              {
                title: "Integrity",
                description: "Honesty and transparency are the foundation of our relationships with clients. We deliver what we promise, every single time.",
              },
              {
                title: "Innovation",
                description: "We stay ahead of design trends and continuously evolve our solutions to meet the changing needs of our clients.",
              },
              {
                title: "Customer Focus",
                description: "Your satisfaction is our success. We listen, understand, and deliver solutions tailored to your unique requirements.",
              },
              {
                title: "Sustainability",
                description: "We are committed to environmentally responsible practices and sustainable design solutions for a better future.",
              },
              {
                title: "Excellence",
                description: "Excellence is not a destination but a journey. We strive to improve and exceed expectations in everything we do.",
              },
            ].map((value, idx) => (
              <div
                key={idx}
                className="premium-card hover-lift animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.08}s` }}
              >
                <h3 className="text-2xl font-bold mb-3 text-accent">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Branches */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in-up">
            Our Locations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                name: "Main Branch - Udgir",
                description:
                  "Our flagship location serving the Udgir region and surrounding areas with comprehensive interior design and furniture solutions.",
              },
              {
                name: "Pune Branch",
                description:
                  "Expanding our services to Pune, bringing the same level of excellence and customer care to the vibrant city.",
              },
            ].map((branch, idx) => (
              <div
                key={idx}
                className="premium-card hover-lift animate-slide-in-right"
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                <h3 className="text-2xl font-bold mb-4 text-accent">{branch.name}</h3>
                <p className="text-muted-foreground text-lg">{branch.description}</p>
              </div>
            ))}
          </div>
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
