import { motion } from "framer-motion";
import { Star, Shield, MapPin, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const workers = [
  {
    id: 1,
    name: "Fatima Ahmed",
    role: "Maid",
    location: "Lahore",
    experience: "8 years",
    rating: 4.9,
    reviews: 127,
    skills: ["Cleaning", "Cooking", "Childcare"],
    verified: true,
    bgCheck: true,
    avatar: "F",
  },
  {
    id: 2,
    name: "Muhammad Ali",
    role: "Driver",
    location: "Karachi",
    experience: "12 years",
    rating: 4.8,
    reviews: 89,
    skills: ["City Driving", "Long Routes", "Car Maintenance"],
    verified: true,
    bgCheck: true,
    avatar: "M",
  },
  {
    id: 3,
    name: "Saba Khan",
    role: "Cook",
    location: "Islamabad",
    experience: "6 years",
    rating: 4.9,
    reviews: 156,
    skills: ["Pakistani Cuisine", "Chinese", "BBQ"],
    verified: true,
    bgCheck: true,
    avatar: "S",
  },
  {
    id: 4,
    name: "Hassan Raza",
    role: "Gardener",
    location: "Lahore",
    experience: "10 years",
    rating: 4.7,
    reviews: 64,
    skills: ["Landscaping", "Plant Care", "Lawn Maintenance"],
    verified: true,
    bgCheck: false,
    avatar: "H",
  },
  {
    id: 5,
    name: "Ayesha Bibi",
    role: "Nanny",
    location: "Faisalabad",
    experience: "5 years",
    rating: 5.0,
    reviews: 42,
    skills: ["Infant Care", "Education", "First Aid"],
    verified: true,
    bgCheck: true,
    avatar: "A",
  },
  {
    id: 6,
    name: "Imran Malik",
    role: "Driver",
    location: "Rawalpindi",
    experience: "15 years",
    rating: 4.8,
    reviews: 203,
    skills: ["Executive Driving", "Security Trained", "Multi-city"],
    verified: true,
    bgCheck: true,
    avatar: "I",
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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const FeaturedWorkersSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
        >
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              Top Rated
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Featured <span className="text-gradient-trust">Workers</span>
            </h2>
            <p className="text-muted-foreground mt-2">
              Hand-picked, verified professionals ready to serve
            </p>
          </div>
          <Button variant="outline" size="lg" className="group" asChild>
            <Link to="/workers">
              View All Workers
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>

        {/* Workers Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {workers.map((worker) => (
            <motion.div
              key={worker.id}
              variants={cardVariants}
              className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-transparent hover:border-primary/20"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center text-primary-foreground text-xl font-bold shrink-0">
                  {worker.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-foreground truncate">{worker.name}</h3>
                    {worker.verified && (
                      <span className="shrink-0 px-2 py-0.5 rounded-full bg-secondary/10 text-secondary text-xs font-medium flex items-center gap-1">
                        <Shield className="w-3 h-3" />
                        Verified
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{worker.role} • {worker.experience}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{worker.location}</span>
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-accent text-accent" />
                  <span className="text-sm font-semibold text-foreground">{worker.rating}</span>
                </div>
                <span className="text-sm text-muted-foreground">({worker.reviews} reviews)</span>
                {worker.bgCheck && (
                  <span className="ml-auto px-2 py-0.5 rounded-full bg-accent/10 text-accent text-xs font-medium">
                    BG Checked
                  </span>
                )}
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-4">
                {worker.skills.slice(0, 3).map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <Button
                variant="trust"
                size="sm"
                className="w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                View Profile
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
