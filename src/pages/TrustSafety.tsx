import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Shield, 
  CheckCircle2, 
  FileCheck, 
  Lock, 
  Eye, 
  AlertTriangle,
  UserCheck,
  BadgeCheck,
  Phone,
  MessageCircle,
  Star,
  FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const verificationSteps = [
  {
    icon: FileCheck,
    title: "ID Verification",
    description: "We verify government-issued IDs (CNIC) to confirm worker identity.",
    urdu: "شناختی کارڈ کی تصدیق"
  },
  {
    icon: UserCheck,
    title: "Background Checks",
    description: "Criminal record checks and past employment verification for safety.",
    urdu: "پس منظر کی جانچ"
  },
  {
    icon: Phone,
    title: "Phone Verification",
    description: "All users must verify their phone numbers for accountability.",
    urdu: "فون نمبر کی تصدیق"
  },
  {
    icon: Star,
    title: "Reference Checks",
    description: "We contact previous employers to verify work history and conduct.",
    urdu: "حوالہ جات کی تصدیق"
  }
];

const safetyFeatures = [
  {
    icon: Lock,
    title: "Secure Messaging",
    description: "All communications happen through our encrypted platform. Your personal contact details remain private until you choose to share them.",
  },
  {
    icon: Eye,
    title: "Profile Monitoring",
    description: "Our team continuously monitors profiles and reviews for suspicious activity. Fake profiles are removed immediately.",
  },
  {
    icon: AlertTriangle,
    title: "Report System",
    description: "Easy-to-use reporting tools for any misconduct. Our support team reviews all reports within 24 hours.",
  },
  {
    icon: MessageCircle,
    title: "24/7 Support",
    description: "Our dedicated support team is available around the clock to assist with any safety concerns or disputes.",
  }
];

const trustBadges = [
  {
    icon: BadgeCheck,
    name: "ID Verified",
    color: "bg-secondary",
    description: "Worker's CNIC has been verified"
  },
  {
    icon: Shield,
    name: "Background Checked",
    color: "bg-primary",
    description: "Passed criminal background check"
  },
  {
    icon: Star,
    name: "Top Rated",
    color: "bg-accent",
    description: "4.5+ rating with 50+ reviews"
  },
  {
    icon: FileText,
    name: "References Verified",
    color: "bg-secondary",
    description: "Previous employment confirmed"
  }
];

const TrustSafety = () => {
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
                  <Shield className="w-10 h-10" />
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                  Trust & Safety
                </h1>
                <p className="text-lg sm:text-xl text-primary-foreground/80 mb-4">
                  Your safety is our top priority. Learn how we verify workers and 
                  protect both employers and workers on our platform.
                </p>
                <p className="text-xl font-urdu">
                  آپ کی حفاظت ہماری ترجیح ہے
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Verification Process */}
        <section className="section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Our Verification Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Every worker on Kaam Dekho goes through our rigorous 4-step verification process
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {verificationSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative bg-card rounded-2xl p-6 shadow-card text-center"
                >
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground mb-2">{step.description}</p>
                  <p className="text-sm font-urdu text-secondary">{step.urdu}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="section-padding bg-muted/50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Understanding Trust Badges
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Look for these badges on worker profiles to understand their verification status
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={badge.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 shadow-card text-center"
                >
                  <div className={`w-14 h-14 rounded-xl ${badge.color} flex items-center justify-center mx-auto mb-4`}>
                    <badge.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{badge.name}</h3>
                  <p className="text-sm text-muted-foreground">{badge.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety Features */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  Safety Features That Protect You
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We've built multiple layers of protection to ensure a safe experience 
                  for everyone on our platform.
                </p>
                <div className="space-y-6">
                  {safetyFeatures.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-8 shadow-xl"
              >
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Report a Concern
                </h3>
                <p className="text-muted-foreground mb-6">
                  If you encounter any issues or suspicious activity, please report it 
                  immediately. Your safety matters to us.
                </p>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/20">
                    <h4 className="font-semibold text-destructive mb-1">Emergency</h4>
                    <p className="text-sm text-muted-foreground">
                      For immediate safety concerns, contact local authorities first.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-accent/10 border border-accent/20">
                    <h4 className="font-semibold text-accent-foreground mb-1">Platform Issues</h4>
                    <p className="text-sm text-muted-foreground">
                      Report misconduct, fake profiles, or policy violations to our team.
                    </p>
                  </div>
                </div>
                <Button variant="hero" size="lg" className="w-full mt-6" asChild>
                  <Link to="/contact">Report an Issue</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 lg:py-24 bg-gradient-hero text-primary-foreground">
          <div className="container-custom">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { value: "100%", label: "ID Verified Workers" },
                { value: "50K+", label: "Background Checks Done" },
                { value: "24/7", label: "Support Available" },
                { value: "99.9%", label: "Safe Transactions" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-4xl sm:text-5xl font-bold mb-2">{stat.value}</div>
                  <div className="text-primary-foreground/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TrustSafety;
