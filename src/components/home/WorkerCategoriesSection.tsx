import { motion } from "framer-motion";
import { 
  Home, 
  Car, 
  ChefHat, 
  Baby, 
  Flower2, 
  Shield, 
  Briefcase, 
  Sparkles,
  ArrowRight 
} from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    icon: Home,
    name: "Maid / House Help",
    nameUrdu: "آیا / گھریلو ملازمہ",
    count: "15,000+",
    color: "primary",
  },
  {
    icon: Car,
    name: "Driver",
    nameUrdu: "ڈرائیور",
    count: "8,500+",
    color: "secondary",
  },
  {
    icon: ChefHat,
    name: "Cook",
    nameUrdu: "باورچی",
    count: "5,200+",
    color: "accent",
  },
  {
    icon: Baby,
    name: "Nanny / Babysitter",
    nameUrdu: "آیا / بچوں کی دیکھ بھال",
    count: "3,800+",
    color: "primary",
  },
  {
    icon: Flower2,
    name: "Gardener",
    nameUrdu: "مالی",
    count: "2,100+",
    color: "secondary",
  },
  {
    icon: Shield,
    name: "Security Guard",
    nameUrdu: "چوکیدار",
    count: "4,500+",
    color: "accent",
  },
  {
    icon: Briefcase,
    name: "Office Helper",
    nameUrdu: "آفس بوائے",
    count: "3,200+",
    color: "primary",
  },
  {
    icon: Sparkles,
    name: "Deep Cleaning",
    nameUrdu: "صفائی کا کام",
    count: "6,800+",
    color: "secondary",
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
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export const WorkerCategoriesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Categories
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Browse by <span className="text-gradient-trust">Worker Type</span>
          </h2>
          <p className="text-muted-foreground">
            Find the right help for every need — from daily house chores to specialized services
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div key={category.name} variants={itemVariants}>
                <Link
                  to={`/workers?category=${category.name.toLowerCase().split(" ")[0]}`}
                  className="group block bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-transparent hover:border-primary/20 text-center"
                >
                  <div
                    className={`w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center transition-transform group-hover:scale-110 ${
                      category.color === "primary"
                        ? "bg-gradient-trust"
                        : category.color === "secondary"
                        ? "bg-gradient-success"
                        : "bg-gradient-badge"
                    }`}
                  >
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{category.name}</h3>
                  <p className="text-sm font-urdu text-muted-foreground mb-2">{category.nameUrdu}</p>
                  <p className="text-sm text-primary font-medium">{category.count} workers</p>
                  <div className="mt-4 flex items-center justify-center gap-1 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    Browse
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
