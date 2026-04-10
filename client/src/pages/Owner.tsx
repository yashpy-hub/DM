import Navigation from "@/components/Navigation";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Owner() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 animate-fade-in-up">
            Meet Our Owner
          </h1>
          <p className="text-center text-muted-foreground text-lg animate-fade-in-up stagger-1">
            20+ Years of Excellence in Interior Design & Furniture
          </p>
        </div>
      </section>

      {/* Owner Profile Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center animate-fade-in-scale">
              <div className="relative group">
                {/* Decorative Background Frame */}
                <div className="absolute -inset-4 border-2 border-accent/30 rounded-lg translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
                <div className="absolute -inset-4 border-2 border-accent/10 rounded-lg -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 delay-75"></div>
                
                {/* Image Container */}
                <div className="relative w-72 h-96 md:w-80 md:h-[30rem] rounded-lg overflow-hidden shadow-2xl z-10">
                  <img
                    src="/photos/owner.jpeg"
                    alt="Tukaram Biradar - Owner of DM Interiors"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                  
                  {/* Floating Badge */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-white text-center font-serif italic">Crafting Excellence Since 2002</p>
                  </div>
                </div>

                {/* Accent Corner Decor */}
                <div className="absolute -top-2 -right-2 w-12 h-12 border-t-4 border-r-4 border-accent z-20"></div>
                <div className="absolute -bottom-2 -left-2 w-12 h-12 border-b-4 border-l-4 border-accent z-20"></div>
              </div>
            </div>

            {/* Profile Information */}
            <div className="animate-slide-in-right">
              <div className="mb-8">
                <h2 className="text-5xl md:text-6xl font-bold text-accent mb-2">
                  TUKARAM BIRADAR
                </h2>
                <p className="text-xl font-semibold text-muted-foreground uppercase tracking-widest border-b-2 border-accent/20 pb-4 inline-block">
                  Founder & Principal Designer
                </p>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Visionary Leader in Interior Design
              </h3>

              <div className="space-y-6 mb-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With over 20 years of dedicated experience in interior design and furniture solutions, our owner has built a reputation for excellence, innovation, and customer satisfaction. Every project is approached with meticulous attention to detail and a passion for creating spaces that inspire.
                </p>

                <div className="bg-accent/10 border-l-4 border-accent p-6 rounded">
                  <p className="text-lg font-semibold text-accent mb-2">Our Philosophy</p>
                  <p className="text-foreground">
                    We believe that every space tells a story. Our mission is to transform ordinary spaces into extraordinary experiences through thoughtful design, premium materials, and exceptional craftsmanship.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="premium-card">
                    <p className="text-3xl font-bold text-accent">20+</p>
                    <p className="text-sm text-muted-foreground">Years Experience</p>
                  </div>
                  <div className="premium-card">
                    <p className="text-3xl font-bold text-accent">10,000+</p>
                    <p className="text-sm text-muted-foreground">Satisfied Clients</p>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-4 mb-8">
                <h3 className="text-2xl font-bold">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-accent flex-shrink-0" />
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-semibold">+91 8208326652</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-accent flex-shrink-0" />
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-semibold">balajibiradar6652@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="w-6 h-6 text-accent flex-shrink-0" />
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-semibold">Udgir & Pune, Maharashtra</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div>
                <h3 className="text-2xl font-bold mb-4">Connect With Us</h3>
                <div className="flex gap-4">
                  {[
                    { icon: Facebook, label: "Facebook" },
                    { icon: Instagram, label: "Instagram" },
                    { icon: Linkedin, label: "LinkedIn" },
                    { icon: Twitter, label: "Twitter" },
                  ].map((social, idx) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={idx}
                        href="#"
                        className="w-12 h-12 bg-accent text-accent-foreground rounded-lg flex items-center justify-center hover-lift transition-all"
                        title={social.label}
                      >
                        <Icon size={24} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in-up">
            Areas of Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Residential Design",
                description: "Creating beautiful, functional living spaces tailored to your lifestyle and preferences",
              },
              {
                title: "Commercial Interiors",
                description: "Professional office and retail spaces that enhance productivity and brand identity",
              },
              {
                title: "Custom Furniture",
                description: "Bespoke furniture solutions designed and crafted to perfection for your unique needs",
              },
            ].map((expertise, idx) => (
              <div
                key={idx}
                className="premium-card hover-lift animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <h3 className="text-2xl font-bold mb-3 text-accent">{expertise.title}</h3>
                <p className="text-muted-foreground">{expertise.description}</p>
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
