import { motion } from "framer-motion";
import { Search, Shield, Star, ChevronRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const stats = [
  { value: "50K+", label: "Verified Workers" },
  { value: "100K+", label: "Happy Families" },
  { value: "4.8★", label: "Average Rating" },
];

const trustBadges = [
  { icon: Shield, text: "ID Verified" },
  { icon: Star, text: "Background Checked" },
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-background to-muted">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/3 to-secondary/3 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10 pt-24 lg:pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/20 mb-6"
            >
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">Pakistan's #1 Trusted Platform</span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 leading-tight">
              Find{" "}
              <span className="text-gradient-hero">Verified</span>
              <br />
              Domestic Help,
              <br />
              <span className="text-gradient-trust">With Confidence</span>
            </h1>

            {/* Urdu Tagline */}
            <p className="text-lg sm:text-xl font-urdu text-muted-foreground mb-4">
              بھروسے کا نام — کام دیکھو
            </p>

            {/* Description */}
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Connect with background-checked maids, drivers, cooks, and gardeners. 
              Safe, reliable, and just a few clicks away.
            </p>

            {/* Search Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 mb-8"
            >
              <div className="flex-1 relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Enter your city (e.g., Lahore, Karachi)"
                  className="w-full h-14 pl-12 pr-4 rounded-xl border-2 border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                />
              </div>
              <Button variant="hero" size="xl" className="group" asChild>
                <Link to="/workers">
                  <Search className="w-5 h-5" />
                  Find Workers
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10">
              {["Maid", "Driver", "Cook", "Gardener", "Nanny"].map((role) => (
                <Link
                  key={role}
                  to={`/workers?role=${role.toLowerCase()}`}
                  className="px-4 py-2 rounded-full bg-muted text-sm font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  {role}
                </Link>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6"
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Worker Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Main Card */}
            <div className="relative">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="bg-card rounded-2xl shadow-card-hover p-6 max-w-sm ml-auto"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-hero flex items-center justify-center text-primary-foreground text-2xl font-bold">
                    F
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-foreground">Fatima Ahmed</h3>
                      <span className="px-2 py-0.5 rounded-full bg-secondary/10 text-secondary text-xs font-medium flex items-center gap-1">
                        <Shield className="w-3 h-3" />
                        Verified
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">Experienced Maid • Lahore</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="w-4 h-4 fill-accent text-accent" />
                      <span className="text-sm font-medium">4.9</span>
                      <span className="text-sm text-muted-foreground">(127 reviews)</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Cleaning", "Cooking", "Childcare"].map((skill) => (
                    <span key={skill} className="px-3 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground">
                      {skill}
                    </span>
                  ))}
                </div>
                <Button variant="trust" size="sm" className="w-full">
                  View Profile
                </Button>
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -left-8 top-1/2 -translate-y-1/2 bg-card rounded-xl shadow-lg p-4 border border-border"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-badge flex items-center justify-center">
                    <Shield className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">100%</p>
                    <p className="text-xs text-muted-foreground">Verified IDs</p>
                  </div>
                </div>
              </motion.div>

              {/* Rating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                className="absolute -right-4 bottom-20 bg-card rounded-xl shadow-lg p-4 border border-border"
              >
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold">4.8/5</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Average Rating</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
