import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Search, 
  Filter, 
  MapPin, 
  Star, 
  Shield, 
  X, 
  ChevronDown,
  MessageCircle,
  Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

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
    salary: "25,000 - 35,000",
    availability: "Full-time",
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
    salary: "35,000 - 50,000",
    availability: "Full-time",
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
    salary: "30,000 - 45,000",
    availability: "Full-time",
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
    salary: "20,000 - 30,000",
    availability: "Part-time",
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
    salary: "28,000 - 40,000",
    availability: "Full-time",
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
    salary: "45,000 - 65,000",
    availability: "Full-time",
  },
  {
    id: 7,
    name: "Nasreen Bano",
    role: "Maid",
    location: "Multan",
    experience: "4 years",
    rating: 4.6,
    reviews: 38,
    skills: ["Cleaning", "Ironing", "Elderly Care"],
    verified: true,
    bgCheck: true,
    avatar: "N",
    salary: "20,000 - 28,000",
    availability: "Full-time",
  },
  {
    id: 8,
    name: "Rashid Khan",
    role: "Security Guard",
    location: "Karachi",
    experience: "20 years",
    rating: 4.9,
    reviews: 87,
    skills: ["Armed Guard", "CCTV Monitoring", "Night Shifts"],
    verified: true,
    bgCheck: true,
    avatar: "R",
    salary: "30,000 - 45,000",
    availability: "Full-time",
  },
];

const roles = ["All", "Maid", "Driver", "Cook", "Nanny", "Gardener", "Security Guard"];
const cities = ["All Cities", "Lahore", "Karachi", "Islamabad", "Rawalpindi", "Faisalabad", "Multan"];

const Workers = () => {
  const [selectedRole, setSelectedRole] = useState("All");
  const [selectedCity, setSelectedCity] = useState("All Cities");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const filteredWorkers = workers.filter((worker) => {
    const matchesRole = selectedRole === "All" || worker.role === selectedRole;
    const matchesCity = selectedCity === "All Cities" || worker.location === selectedCity;
    const matchesSearch = worker.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      worker.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesRole && matchesCity && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 lg:pt-24">
        {/* Search Header */}
        <section className="bg-gradient-hero text-primary-foreground py-12 lg:py-16">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Find Verified Workers
              </h1>
              <p className="text-lg text-primary-foreground/80 mb-8 font-urdu">
                تصدیق شدہ گھریلو ملازمین تلاش کریں
              </p>

              {/* Search Bar */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search by name or skill..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full h-14 pl-12 pr-4 rounded-xl border-0 bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-4 focus:ring-primary-foreground/20"
                  />
                </div>
                <Button
                  variant="outline-light"
                  size="lg"
                  onClick={() => setShowFilters(!showFilters)}
                  className="sm:w-auto"
                >
                  <Filter className="w-5 h-5" />
                  Filters
                  <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filters */}
        {showFilters && (
          <motion.section
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-card border-b border-border py-6"
          >
            <div className="container-custom">
              <div className="flex flex-wrap gap-4">
                {/* Role Filter */}
                <div className="flex-1 min-w-[200px]">
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Worker Type
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {roles.map((role) => (
                      <button
                        key={role}
                        onClick={() => setSelectedRole(role)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                          selectedRole === role
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                        }`}
                      >
                        {role}
                      </button>
                    ))}
                  </div>
                </div>

                {/* City Filter */}
                <div className="min-w-[200px]">
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    City
                  </label>
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="w-full h-11 px-4 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:border-primary"
                  >
                    {cities.map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Active Filters */}
              {(selectedRole !== "All" || selectedCity !== "All Cities") && (
                <div className="flex items-center gap-2 mt-4">
                  <span className="text-sm text-muted-foreground">Active filters:</span>
                  {selectedRole !== "All" && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                      {selectedRole}
                      <button onClick={() => setSelectedRole("All")}>
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  {selectedCity !== "All Cities" && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                      {selectedCity}
                      <button onClick={() => setSelectedCity("All Cities")}>
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                </div>
              )}
            </div>
          </motion.section>
        )}

        {/* Results */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="flex items-center justify-between mb-8">
              <p className="text-muted-foreground">
                Showing <span className="font-semibold text-foreground">{filteredWorkers.length}</span> workers
              </p>
            </div>

            {/* Workers Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredWorkers.map((worker, index) => (
                <motion.div
                  key={worker.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-transparent hover:border-primary/20"
                >
                  {/* Header */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center text-primary-foreground text-lg font-bold shrink-0">
                      {worker.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <h3 className="font-semibold text-foreground truncate">{worker.name}</h3>
                        {worker.verified && (
                          <Shield className="w-4 h-4 text-secondary shrink-0" />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{worker.role}</p>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{worker.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Star className="w-4 h-4 fill-accent text-accent" />
                      <span className="font-medium text-foreground">{worker.rating}</span>
                      <span className="text-muted-foreground">({worker.reviews} reviews)</span>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {worker.skills.slice(0, 2).map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded-full bg-muted text-xs font-medium text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                    {worker.skills.length > 2 && (
                      <span className="px-2 py-0.5 rounded-full bg-muted text-xs font-medium text-muted-foreground">
                        +{worker.skills.length - 2}
                      </span>
                    )}
                  </div>

                  {/* Salary & Availability */}
                  <div className="flex items-center justify-between mb-4 text-sm">
                    <span className="font-semibold text-primary">PKR {worker.salary}</span>
                    <span className="text-muted-foreground">{worker.availability}</span>
                  </div>

                  {/* Badges */}
                  <div className="flex gap-2 mb-4">
                    {worker.verified && (
                      <span className="px-2 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-medium">
                        ID Verified
                      </span>
                    )}
                    {worker.bgCheck && (
                      <span className="px-2 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                        BG Checked
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button variant="trust" size="sm" className="flex-1">
                      <MessageCircle className="w-4 h-4" />
                      Message
                    </Button>
                    <Button variant="whatsapp" size="sm" className="px-3">
                      <Phone className="w-4 h-4" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredWorkers.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl text-muted-foreground mb-4">No workers found matching your criteria</p>
                <Button variant="outline" onClick={() => { setSelectedRole("All"); setSelectedCity("All Cities"); setSearchQuery(""); }}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Workers;
