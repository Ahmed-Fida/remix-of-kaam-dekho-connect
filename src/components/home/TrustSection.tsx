import { motion } from "framer-motion";
import { Shield, UserCheck, FileCheck, Lock, AlertTriangle, BadgeCheck } from "lucide-react";

const trustFeatures = [
  {
    icon: UserCheck,
    title: "ID Verification",
    description: "Every worker's CNIC is verified through official databases",
  },
  {
    icon: FileCheck,
    title: "Background Checks",
    description: "Comprehensive checks including police verification and reference calls",
  },
  {
    icon: BadgeCheck,
    title: "Skill Assessment",
    description: "Workers are assessed for their claimed skills before listing",
  },
  {
    icon: Lock,
    title: "Secure Communication",
    description: "All messages are encrypted. No personal data shared until you approve",
  },
  {
    icon: AlertTriangle,
    title: "24/7 Support",
    description: "Our team is always available to help resolve any disputes or concerns",
  },
  {
    icon: Shield,
    title: "Trust Guarantee",
    description: "If anything goes wrong, we'll help you find a replacement immediately",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const TrustSection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-dark via-primary to-primary-light text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 border border-primary-foreground rounded-full" />
        <div className="absolute bottom-10 right-10 w-60 h-60 border border-primary-foreground rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 border border-primary-foreground rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-4 border border-primary-foreground/20">
            <Shield className="w-4 h-4" />
            Your Safety Matters
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Trust & Safety First
          </h2>
          <p className="text-lg text-primary-foreground/80 font-urdu mb-2">
            آپ کا اعتماد ہماری ترجیح
          </p>
          <p className="text-lg text-primary-foreground/80">
            We take extensive measures to ensure every hire is safe, verified, and reliable.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {trustFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10 hover:bg-primary-foreground/15 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-primary-foreground/80">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Trust Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12"
        >
          {[
            { value: "100%", label: "ID Verified Workers" },
            { value: "50K+", label: "Background Checks Done" },
            { value: "99.9%", label: "Customer Satisfaction" },
            { value: "24/7", label: "Support Available" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-primary-foreground/70">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
