import { motion } from "framer-motion";
import { Search, UserCheck, MessageSquare, Handshake, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Search Workers",
    titleUrdu: "تلاش کریں",
    description: "Browse verified profiles of maids, drivers, cooks, and more in your city.",
    color: "primary",
  },
  {
    icon: UserCheck,
    title: "Review Profiles",
    titleUrdu: "پروفائل دیکھیں",
    description: "Check ratings, experience, background verification status, and reviews from other employers.",
    color: "secondary",
  },
  {
    icon: MessageSquare,
    title: "Connect Directly",
    titleUrdu: "رابطہ کریں",
    description: "Chat in-app or connect via WhatsApp to discuss requirements and availability.",
    color: "accent",
  },
  {
    icon: Handshake,
    title: "Hire with Confidence",
    titleUrdu: "بھروسے سے رکھیں",
    description: "Finalize hiring, track jobs, and leave reviews after service completion.",
    color: "primary",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-padding bg-muted/50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How <span className="text-gradient-hero">Kaam Dekho</span> Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Finding reliable domestic help has never been easier. Follow these simple steps to get started.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;
            
            return (
              <motion.div
                key={step.title}
                variants={itemVariants}
                className="relative"
              >
                {/* Connector Line (Desktop) */}
                {!isLast && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-full">
                    <ArrowRight className="w-6 h-6 text-border" />
                  </div>
                )}

                <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300 h-full">
                  {/* Step Number */}
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                        step.color === "primary"
                          ? "bg-gradient-trust"
                          : step.color === "secondary"
                          ? "bg-gradient-success"
                          : "bg-gradient-badge"
                      }`}
                    >
                      <Icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <span className="text-4xl font-bold text-muted-foreground/20">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-1">{step.title}</h3>
                  <p className="text-sm font-urdu text-primary mb-3">{step.titleUrdu}</p>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
