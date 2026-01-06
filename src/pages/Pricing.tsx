import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Check, 
  X,
  Crown,
  Building2,
  User,
  Zap,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const employerPlans = [
  {
    name: "Free",
    price: "0",
    period: "forever",
    description: "Perfect for trying out the platform",
    icon: User,
    features: [
      { text: "Browse verified workers", included: true },
      { text: "View worker profiles", included: true },
      { text: "5 messages per month", included: true },
      { text: "Basic search filters", included: true },
      { text: "Unlimited messaging", included: false },
      { text: "Priority support", included: false },
      { text: "Background check reports", included: false },
    ],
    cta: "Get Started",
    variant: "outline" as const,
    popular: false,
  },
  {
    name: "Standard",
    price: "1,500",
    period: "per month",
    description: "Best for households with regular hiring needs",
    icon: Zap,
    features: [
      { text: "Browse verified workers", included: true },
      { text: "View worker profiles", included: true },
      { text: "Unlimited messaging", included: true },
      { text: "Advanced search filters", included: true },
      { text: "View contact numbers", included: true },
      { text: "Save favorite workers", included: true },
      { text: "Email support", included: true },
    ],
    cta: "Subscribe Now",
    variant: "hero" as const,
    popular: true,
  },
  {
    name: "Business",
    price: "5,000",
    period: "per month",
    description: "For offices and businesses with bulk hiring needs",
    icon: Building2,
    features: [
      { text: "Everything in Standard", included: true },
      { text: "Bulk hiring tools", included: true },
      { text: "Detailed background reports", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "Invoice management", included: true },
      { text: "Priority support 24/7", included: true },
      { text: "Custom contracts", included: true },
    ],
    cta: "Contact Sales",
    variant: "trust" as const,
    popular: false,
  },
];

const workerBenefits = [
  "Free profile creation",
  "Free verification process",
  "Apply to unlimited jobs",
  "Receive messages from employers",
  "Build your reputation with reviews",
  "No commission on earnings",
];

const faqs = [
  {
    question: "Is Kaam Dekho free for workers?",
    answer: "Yes! Workers can create profiles, get verified, apply to jobs, and receive messages from employers completely free. We believe in empowering workers with access to opportunities without any barriers."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept JazzCash, Easypaisa, bank transfers, and credit/debit cards. All payments are secure and encrypted."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Absolutely. You can cancel your subscription at any time from your dashboard. There are no cancellation fees or long-term commitments."
  },
  {
    question: "Do you take commission from worker salaries?",
    answer: "No, we never take any commission from worker salaries. Workers keep 100% of what they earn from employers."
  },
  {
    question: "Is there a refund policy?",
    answer: "Yes, if you're not satisfied within the first 7 days, we offer a full refund. Contact our support team to process your refund."
  },
];

const Pricing = () => {
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
                  Simple, Transparent Pricing
                </h1>
                <p className="text-lg sm:text-xl text-primary-foreground/80 mb-4">
                  Choose the plan that works for you. No hidden fees, 
                  cancel anytime.
                </p>
                <p className="text-xl font-urdu">
                  سادہ اور شفاف قیمتیں
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Employer Plans */}
        <section className="section-padding">
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
                Employer Plans
              </h2>
              <p className="text-lg text-muted-foreground">
                Choose the plan that fits your hiring needs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {employerPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative bg-card rounded-2xl p-6 shadow-card ${
                    plan.popular ? "ring-2 ring-primary" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" />
                      Most Popular
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <plan.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-foreground">PKR {plan.price}</span>
                      <span className="text-muted-foreground">/{plan.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        {feature.included ? (
                          <Check className="w-4 h-4 text-secondary shrink-0" />
                        ) : (
                          <X className="w-4 h-4 text-muted-foreground shrink-0" />
                        )}
                        <span className={feature.included ? "text-foreground" : "text-muted-foreground"}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button variant={plan.variant} className="w-full" asChild>
                    <Link to="/auth?mode=signup&type=employer">{plan.cta}</Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* For Workers */}
        <section className="section-padding bg-gradient-success text-primary-foreground">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Crown className="w-16 h-16 mx-auto mb-6 opacity-80" />
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Free for Workers, Always
                </h2>
                <p className="text-lg text-primary-foreground/80 mb-8">
                  We believe in empowering workers with free access to opportunities. 
                  Create your profile, get verified, and start finding work—all at no cost.
                </p>
                <p className="text-xl font-urdu mb-8">
                  ملازمین کے لیے ہمیشہ مفت
                </p>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-left mb-8">
                  {workerBenefits.map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-2 bg-primary-foreground/10 rounded-lg px-4 py-3"
                    >
                      <Check className="w-5 h-5 shrink-0" />
                      <span>{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                <Button variant="outline-light" size="lg" asChild>
                  <Link to="/auth?mode=signup&type=worker">Register as a Worker</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-xl p-6 shadow-card"
                >
                  <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of employers and workers who trust Kaam Dekho for their hiring needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/auth?mode=signup&type=employer">Start Hiring</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">Contact Sales</Link>
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

export default Pricing;
