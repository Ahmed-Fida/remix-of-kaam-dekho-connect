import { motion } from "framer-motion";
import { ArrowRight, Users, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const CTASection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* For Employers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-hero rounded-3xl p-8 sm:p-12 text-primary-foreground overflow-hidden group"
          >
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-foreground/5 rounded-full blur-2xl" />

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-primary-foreground/20 flex items-center justify-center mb-6">
                <Users className="w-7 h-7" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold mb-3">Looking to Hire?</h3>
              <p className="text-lg font-urdu mb-2 opacity-90">گھر کے لیے مدد چاہیے؟</p>
              <p className="text-primary-foreground/80 mb-8 max-w-md">
                Find verified maids, drivers, cooks, and more. Background-checked, 
                reviewed, and ready to serve your family.
              </p>

              <Button
                variant="outline-light"
                size="lg"
                className="group/btn"
                asChild
              >
                <Link to="/workers">
                  Find Workers Now
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* For Workers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative bg-gradient-success rounded-3xl p-8 sm:p-12 text-secondary-foreground overflow-hidden group"
          >
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-foreground/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary-foreground/5 rounded-full blur-2xl" />

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-secondary-foreground/20 flex items-center justify-center mb-6">
                <Building2 className="w-7 h-7" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold mb-3">Looking for Work?</h3>
              <p className="text-lg font-urdu mb-2 opacity-90">کام کی تلاش ہے؟</p>
              <p className="text-secondary-foreground/80 mb-8 max-w-md">
                Join thousands of domestic workers earning fair wages through verified 
                employers. Free registration, guaranteed payment.
              </p>

              <Button
                variant="outline-light"
                size="lg"
                className="group/btn"
                asChild
              >
                <Link to="/signup?type=worker">
                  Register as Worker
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
