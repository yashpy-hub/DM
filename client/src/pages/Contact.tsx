import Navigation from "@/components/Navigation";
import { useState, useRef } from "react";
import { Phone, Mail, MapPin, Clock, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    type: "inquiry",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.current) return;

    setIsSubmitting(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

      if (serviceId === "YOUR_SERVICE_ID") {
        console.log("EmailJS not configured. Form data:", formData);
        await new Promise(resolve => setTimeout(resolve, 1500));
        toast.success("Demo Mode: Message recorded (Configure EmailJS for actual delivery)");
      } else {
        await emailjs.sendForm(
          serviceId,
          templateId,
          form.current,
          publicKey
        );
        toast.success("Message sent successfully! We will get back to you soon.");
      }

      setFormData({ name: "", email: "", phone: "", subject: "", message: "", type: "inquiry" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 animate-fade-in-up">
            Get In Touch
          </h1>
          <p className="text-center text-muted-foreground text-lg animate-fade-in-up stagger-1">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: Phone,
                title: "Phone",
                content: "+91 8208326652",
                subtext: "Available 9 AM - 6 PM",
              },
              {
                icon: Mail,
                title: "Email",
                content: "balajibiradar6652@gmail.com",
                subtext: "We reply within 24 hours",
              },
              {
                icon: MapPin,
                title: "Main Branch",
                content: "Udgir, Maharashtra",
                subtext: "Visit our showroom",
              },
              {
                icon: MapPin,
                title: "Pune Branch",
                content: "Pune, Maharashtra",
                subtext: "Visit our showroom",
              },
            ].map((info, idx) => {
              const Icon = info.icon;
              return (
                <div
                  key={idx}
                  className="premium-card hover-lift text-center animate-fade-in-scale"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <Icon className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                  <p className="font-semibold text-foreground mb-1">{info.content}</p>
                  <p className="text-sm text-muted-foreground">{info.subtext}</p>
                </div>
              );
            })}
          </div>

          {/* Business Hours */}
          <div className="bg-secondary/30 rounded-lg p-8 mb-16 animate-fade-in-up">
            <div className="flex items-center gap-4 mb-6">
              <Clock className="w-8 h-8 text-accent" />
              <h3 className="text-2xl font-bold">Business Hours</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="font-semibold mb-4">Monday - Friday</p>
                <p className="text-muted-foreground">9:00 AM - 9:00 PM</p>
              </div>
              <div>
                <p className="font-semibold mb-4">Saturday - Sunday</p>
                <p className="text-muted-foreground">10:00 AM - 9:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in-up">
              Send Us a Message
            </h2>

            <form 
              ref={form} 
              onSubmit={handleSubmit} 
              className="space-y-6 animate-fade-in-up stagger-1 bg-background p-8 rounded-xl shadow-lg border border-border"
            >
              {/* Form Type */}
              <div>
                <label className="block text-sm font-semibold mb-2">Request Type</label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-secondary/20 text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                >
                  <option value="inquiry">General Inquiry</option>
                  <option value="consultation">Free Consultation</option>
                  <option value="quote">Request a Quote</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>

              {/* Name */}
              <div>
                <label className="block text-sm font-semibold mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg bg-secondary/20 text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg bg-secondary/20 text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg bg-secondary/20 text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-semibold mb-2">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg bg-secondary/20 text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  placeholder="What is this about?"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-secondary/20 text-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none transition-all"
                  placeholder="Tell us more about your project..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 py-6 text-lg font-semibold flex items-center justify-center gap-2 group transition-all"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
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
