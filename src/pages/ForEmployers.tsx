import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Shield, 
  Search, 
  MessageCircle, 
  Star, 
  Clock, 
  CheckCircle2, 
  Users, 
  FileCheck, 
  Headphones,
  Building2,
  Home,
  Briefcase,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const benefits = [
  {
    icon: Shield,
    title: "100% Verified Workers",
    description: "Every worker is ID verified with background checks for your peace of mind.",
    urdu: "تصدیق شدہ ملازمین"
  },
  {
    icon: Search,
    title: "Easy Search & Filter",
    description: "Find the perfect match with our advanced search by role, location, rating, and experience.",
    urdu: "آسان تلاش"
  },
  {
    icon: MessageCircle,
    title: "Secure Messaging",
    description: "Communicate directly with workers through our secure in-platform messaging system.",
    urdu: "محفوظ پیغام رسانی"
  },
  {
    icon: Star,
    title: "Genuine Reviews",
    description: "Read real reviews from other employers to make informed hiring decisions.",
    urdu: "حقیقی جائزے"
  },
  {
    icon: Clock,
    title: "Quick Hiring",
    description: "Post requirements and get matched with suitable workers within hours.",
    urdu: "فوری خدمات حاصل"
  },
  {
    icon: FileCheck,
    title: "Background Checks",
    description: "We verify past employment, references, and conduct criminal background checks.",
    urdu: "پس منظر کی جانچ"
  }
];

const employerTypes = [
  {
    icon: Home,
    title: "Households",
    description: "Hire reliable maids, cooks, nannies, and drivers for your home.",
    features: ["Flexible schedules", "Part-time options", "Family-friendly workers"]
  },
  {
    icon: Building2,
    title: "Offices",
    description: "Find professional cleaning staff, security guards, and office assistants.",
    features: ["Bulk hiring", "Corporate contracts", "Dedicated account manager"]
  },
  {
    icon: Briefcase,
    title: "Businesses",
    description: "Scale your workforce with verified workers for any commercial need.",
    features: ["Multi-location hiring", "Invoice management", "Priority support"]
  }
];

const steps = [
  {
    step: "01",
    title: "Create Your Account",
    description: "Sign up for free and complete your employer profile in minutes."
  },
  {
    step: "02",
    title: "Post Your Requirements",
    description: "Describe the role, skills needed, and preferred schedule."
  },
  {
    step: "03",
    title: "Browse & Connect",
    description: "Review worker profiles, ratings, and message candidates directly."
  },
  {
    step: "04",
    title: "Hire with Confidence",
    description: "Make your selection and start working with your new hire."
  }
];

const ForEmployers = () => {
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
                <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/10 text-sm font-medium mb-6">
                  For Employers
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                  Hire Trusted Workers
                  <br />
                  <span className="text-primary-foreground/80">With Confidence</span>
                </h1>
                <p className="text-lg sm:text-xl text-primary-foreground/80 mb-4">
                  Find verified maids, drivers, cooks, and more. Background-checked, 
                  reviewed, and ready to work.
                </p>
                <p className="text-xl font-urdu mb-8">
                  بھروسہ مند ملازمین کی تلاش آسان ہو گئی
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline-light" size="lg" asChild>
                    <Link to="/auth?mode=signup&type=employer">
                      Get Started Free
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                  <Button variant="ghost" size="lg" className="text-primary-foreground hover:bg-primary-foreground/10" asChild>
                    <Link to="/workers">Browse Workers</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Why Choose Kaam Dekho?
              </h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to hire with confidence
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all border border-transparent hover:border-primary/20"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground mb-2">{benefit.description}</p>
                  <p className="text-sm font-urdu text-primary">{benefit.urdu}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Employer Types */}
        <section className="section-padding bg-muted/50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Solutions for Every Need
              </h2>
              <p className="text-lg text-muted-foreground">
                Whether you're a household or a business, we've got you covered
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {employerTypes.map((type, index) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-8 shadow-card"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-hero flex items-center justify-center mb-6">
                    <type.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{type.title}</h3>
                  <p className="text-muted-foreground mb-4">{type.description}</p>
                  <ul className="space-y-2">
                    {type.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                        <CheckCircle2 className="w-4 h-4 text-secondary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                How It Works
              </h2>
              <p className="text-lg text-muted-foreground">
                Start hiring in 4 simple steps
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="text-6xl font-bold text-primary/10 mb-4">{step.step}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 right-0 w-12 h-0.5 bg-border" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-hero text-primary-foreground">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Users className="w-16 h-16 mx-auto mb-6 opacity-80" />
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to Find Your Perfect Worker?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied employers who trust Kaam Dekho for their hiring needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline-light" size="lg" asChild>
                  <Link to="/auth?mode=signup&type=employer">
                    Create Free Account
                  </Link>
                </Button>
                <Button variant="ghost" size="lg" className="text-primary-foreground hover:bg-primary-foreground/10" asChild>
                  <Link to="/contact">
                    <Headphones className="w-5 h-5 mr-2" />
                    Talk to Us
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ForEmployers;
