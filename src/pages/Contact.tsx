import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send,
  Headphones,
  HelpCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(5, "Subject must be at least 5 characters").max(200),
  message: z.string().min(20, "Message must be at least 20 characters").max(1000),
});

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+92 321 1234567", "+92 42 35678901"],
    urdu: "فون"
  },
  {
    icon: Mail,
    title: "Email",
    details: ["support@kaamdeho.pk", "business@kaamdeho.pk"],
    urdu: "ای میل"
  },
  {
    icon: MapPin,
    title: "Office",
    details: ["123 Main Boulevard", "Gulberg III, Lahore"],
    urdu: "دفتر"
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Sat: 9 AM - 6 PM", "Sunday: Closed"],
    urdu: "اوقات کار"
  },
];

const supportCategories = [
  { value: "general", label: "General Inquiry" },
  { value: "employer", label: "Employer Support" },
  { value: "worker", label: "Worker Support" },
  { value: "verification", label: "Verification Issues" },
  { value: "payment", label: "Payment & Billing" },
  { value: "report", label: "Report a Problem" },
  { value: "partnership", label: "Business Partnership" },
];

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "general",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      contactSchema.parse(formData);
      setErrors({});
    } catch (error: any) {
      const newErrors: Record<string, string> = {};
      error.errors.forEach((err: any) => {
        newErrors[err.path[0]] = err.message;
      });
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      category: "general",
      subject: "",
      message: "",
    });
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 lg:pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-primary-foreground py-16 lg:py-24">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="w-20 h-20 rounded-2xl bg-primary-foreground/10 flex items-center justify-center mx-auto mb-6">
                  <Headphones className="w-10 h-10" />
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                  Contact & Support
                </h1>
                <p className="text-lg sm:text-xl text-primary-foreground/80 mb-4">
                  Have questions or need help? Our support team is here for you.
                </p>
                <p className="text-xl font-urdu">
                  ہم آپ کی مدد کے لیے موجود ہیں
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 shadow-card text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                  <p className="text-sm font-urdu text-primary mb-2">{info.urdu}</p>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-muted-foreground text-sm">{detail}</p>
                  ))}
                </motion.div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className={`w-full h-12 px-4 rounded-lg border ${
                          errors.name ? "border-destructive" : "border-border"
                        } bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary`}
                      />
                      {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        className={`w-full h-12 px-4 rounded-lg border ${
                          errors.email ? "border-destructive" : "border-border"
                        } bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary`}
                      />
                      {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full h-12 px-4 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:border-primary"
                    >
                      {supportCategories.map((cat) => (
                        <option key={cat.value} value={cat.value}>{cat.label}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Brief description of your inquiry"
                      className={`w-full h-12 px-4 rounded-lg border ${
                        errors.subject ? "border-destructive" : "border-border"
                      } bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary`}
                    />
                    {errors.subject && <p className="text-destructive text-sm mt-1">{errors.subject}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us how we can help..."
                      rows={5}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.message ? "border-destructive" : "border-border"
                      } bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary resize-none`}
                    />
                    {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
                    {loading ? (
                      <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground"></span>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {/* Quick Links */}
                <div className="bg-card rounded-2xl p-6 shadow-card">
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-primary" />
                    Quick Help
                  </h3>
                  <div className="space-y-3">
                    <a href="/how-it-works" className="block p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors">
                      <p className="font-medium text-foreground">How It Works</p>
                      <p className="text-sm text-muted-foreground">Learn how to use Kaam Dekho</p>
                    </a>
                    <a href="/trust" className="block p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors">
                      <p className="font-medium text-foreground">Trust & Safety</p>
                      <p className="text-sm text-muted-foreground">Our verification process explained</p>
                    </a>
                    <a href="/pricing" className="block p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors">
                      <p className="font-medium text-foreground">Pricing & Plans</p>
                      <p className="text-sm text-muted-foreground">View our subscription options</p>
                    </a>
                  </div>
                </div>

                {/* WhatsApp Support */}
                <div className="bg-gradient-success text-primary-foreground rounded-2xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">WhatsApp Support</h3>
                      <p className="text-sm text-primary-foreground/80">Get quick answers via chat</p>
                    </div>
                  </div>
                  <Button 
                    variant="outline-light" 
                    className="w-full"
                    onClick={() => window.open('https://wa.me/923211234567', '_blank')}
                  >
                    Chat on WhatsApp
                  </Button>
                </div>

                {/* Emergency */}
                <div className="bg-destructive/10 border border-destructive/20 rounded-2xl p-6">
                  <h3 className="font-bold text-foreground mb-2">Emergency?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    For urgent safety concerns, please contact local authorities first, 
                    then report to us.
                  </p>
                  <p className="text-sm font-medium text-destructive">
                    Police: 15 | Rescue: 1122
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
