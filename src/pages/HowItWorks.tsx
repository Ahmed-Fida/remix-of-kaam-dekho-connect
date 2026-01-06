import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  UserPlus, 
  Search, 
  MessageCircle, 
  CheckCircle, 
  Star,
  Shield,
  FileCheck,
  Briefcase,
  ArrowRight,
  Building2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const employerSteps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Create Your Account",
    description: "Sign up for free in under 2 minutes. Complete your profile to start browsing verified workers.",
    urdu: "اکاؤنٹ بنائیں"
  },
  {
    icon: Search,
    step: "02",
    title: "Search & Filter",
    description: "Browse workers by role, location, experience, and rating. Use our advanced filters to find the perfect match.",
    urdu: "تلاش کریں"
  },
  {
    icon: FileCheck,
    step: "03",
    title: "Review Profiles",
    description: "Check verification badges, read reviews from other employers, and view work history and skills.",
    urdu: "پروفائل دیکھیں"
  },
  {
    icon: MessageCircle,
    step: "04",
    title: "Connect & Interview",
    description: "Message workers directly through our secure platform. Schedule interviews at your convenience.",
    urdu: "رابطہ کریں"
  },
  {
    icon: CheckCircle,
    step: "05",
    title: "Hire with Confidence",
    description: "Make your selection and start working with your new hire. All workers are verified and background-checked.",
    urdu: "ملازم رکھیں"
  },
  {
    icon: Star,
    step: "06",
    title: "Rate & Review",
    description: "After working together, leave a review to help other employers and recognize great workers.",
    urdu: "جائزہ دیں"
  }
];

const workerSteps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Register Your Profile",
    description: "Create a free account and build your professional profile. Add your skills, experience, and availability.",
    urdu: "پروفائل بنائیں"
  },
  {
    icon: Shield,
    step: "02",
    title: "Get Verified",
    description: "Complete our verification process including ID check and background verification to earn trust badges.",
    urdu: "تصدیق کروائیں"
  },
  {
    icon: Briefcase,
    step: "03",
    title: "Apply for Jobs",
    description: "Browse job listings that match your skills. Apply with a personalized message to stand out.",
    urdu: "نوکری کے لیے درخواست دیں"
  },
  {
    icon: MessageCircle,
    step: "04",
    title: "Connect with Employers",
    description: "Respond to messages from interested employers. Schedule interviews and discuss job details.",
    urdu: "آجروں سے بات کریں"
  },
  {
    icon: CheckCircle,
    step: "05",
    title: "Get Hired",
    description: "Accept job offers that meet your expectations. Start your new position with a verified employer.",
    urdu: "نوکری حاصل کریں"
  },
  {
    icon: Star,
    step: "06",
    title: "Build Your Reputation",
    description: "Deliver great work and collect positive reviews to attract more and better opportunities.",
    urdu: "اپنی ساکھ بنائیں"
  }
];

const HowItWorks = () => {
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
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                  How Kaam Dekho Works
                </h1>
                <p className="text-lg sm:text-xl text-primary-foreground/80 mb-4">
                  A simple, step-by-step guide to finding verified workers 
                  or getting hired through our platform.
                </p>
                <p className="text-xl font-urdu">
                  کام دیکھو کیسے کام کرتا ہے
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-8 bg-card border-b border-border">
          <div className="container-custom">
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#for-employers" className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                <Building2 className="w-5 h-5" />
                For Employers
              </a>
              <a href="#for-workers" className="flex items-center gap-2 px-6 py-3 rounded-full bg-secondary/10 text-secondary hover:bg-secondary/20 transition-colors">
                <Briefcase className="w-5 h-5" />
                For Workers
              </a>
            </div>
          </div>
        </section>

        {/* For Employers */}
        <section id="for-employers" className="section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Building2 className="w-4 h-4" />
                For Employers
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                How to Hire Workers
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Follow these simple steps to find and hire verified domestic workers
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {employerSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all border border-transparent hover:border-primary/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0">
                      <div className="text-4xl font-bold text-primary/20">{step.step}</div>
                    </div>
                    <div>
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                        <step.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                      <p className="text-muted-foreground mb-2">{step.description}</p>
                      <p className="text-sm font-urdu text-primary">{step.urdu}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-10"
            >
              <Button variant="hero" size="lg" asChild>
                <Link to="/auth?mode=signup&type=employer">
                  Start Hiring Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* For Workers */}
        <section id="for-workers" className="section-padding bg-muted/50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
                <Briefcase className="w-4 h-4" />
                For Workers
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                How to Find Work
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Follow these steps to create your profile and start getting hired
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workerSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all border border-transparent hover:border-secondary/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0">
                      <div className="text-4xl font-bold text-secondary/20">{step.step}</div>
                    </div>
                    <div>
                      <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-3">
                        <step.icon className="w-5 h-5 text-secondary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                      <p className="text-muted-foreground mb-2">{step.description}</p>
                      <p className="text-sm font-urdu text-secondary">{step.urdu}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-10"
            >
              <Button variant="success" size="lg" asChild>
                <Link to="/auth?mode=signup&type=worker">
                  Register as a Worker
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* FAQ Teaser */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Have Questions?
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Our support team is here to help. Whether you're an employer or a worker, 
                  we're committed to making your experience smooth and successful.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/contact">Contact Support</Link>
                  </Button>
                  <Button variant="ghost" size="lg" asChild>
                    <Link to="/trust">Learn About Safety</Link>
                  </Button>
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

export default HowItWorks;
