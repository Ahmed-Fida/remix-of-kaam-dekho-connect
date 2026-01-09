import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowLeft, Star, CheckCircle, Shield, MapPin, 
  Clock, Calendar, Phone, MessageSquare, Heart,
  Briefcase, Award, FileText, ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// Demo worker data
const demoWorker = {
  id: "1",
  name: "Fatima Bibi",
  role: "Professional Housemaid",
  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
  rating: 4.9,
  totalReviews: 47,
  totalJobs: 52,
  experience: 8,
  salary: { min: 25000, max: 30000 },
  location: "Lahore",
  availability: "Available Now",
  verified: true,
  bgChecked: true,
  bio: "I am an experienced housemaid with over 8 years of work experience in reputable households. I am skilled in cleaning, cooking basic meals, laundry, and general household management. I am punctual, trustworthy, and take pride in maintaining a clean and organized home environment.",
  skills: ["Cleaning", "Laundry", "Ironing", "Basic Cooking", "Child Care", "Elder Care"],
  languages: ["Urdu", "Punjabi", "Basic English"],
  workHistory: [
    { employer: "Malik Family, DHA", duration: "2 years", role: "Live-in Housemaid" },
    { employer: "Ahmed Residence, Gulberg", duration: "3 years", role: "Part-time Housemaid" },
    { employer: "Khan Family, Model Town", duration: "3 years", role: "Full-time Housemaid" },
  ],
  reviews: [
    { id: "1", reviewer: "Mrs. Malik", rating: 5, date: "Dec 2025", comment: "Fatima has been excellent. Very hardworking and trustworthy. She takes care of our home as if it's her own." },
    { id: "2", reviewer: "Mrs. Ahmed", rating: 5, date: "Nov 2025", comment: "One of the best housemaids we've ever had. Punctual and very thorough with her work." },
    { id: "3", reviewer: "Mrs. Khan", rating: 4, date: "Oct 2025", comment: "Good worker. Takes initiative and doesn't need constant supervision." },
  ],
  schedule: {
    monday: "Available",
    tuesday: "Available",
    wednesday: "Available",
    thursday: "Available",
    friday: "Available",
    saturday: "Available (Half Day)",
    sunday: "Off",
  },
};

const WorkerProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeTab, setActiveTab] = useState<"overview" | "reviews" | "schedule">("overview");

  // In production, fetch worker by ID
  const worker = demoWorker;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-hero text-primary-foreground py-12">
          <div className="container mx-auto px-4">
            <button 
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Workers
            </button>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Profile Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative"
              >
                <img 
                  src={worker.image} 
                  alt={worker.name}
                  className="w-40 h-40 rounded-2xl object-cover border-4 border-primary-foreground/20"
                />
                {worker.verified && (
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-primary-foreground rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                )}
              </motion.div>

              {/* Profile Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex-1"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h1 className="text-3xl font-bold">{worker.name}</h1>
                    <p className="text-xl opacity-90">{worker.role}</p>
                    <div className="flex items-center gap-4 mt-3">
                      <div className="flex items-center gap-1">
                        <Star className="w-5 h-5 fill-current text-amber-400" />
                        <span className="font-semibold">{worker.rating}</span>
                        <span className="opacity-80">({worker.totalReviews} reviews)</span>
                      </div>
                      <span className="opacity-60">•</span>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{worker.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-3 mt-4">
                  {worker.verified && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary-foreground/20 rounded-full text-sm font-medium">
                      <CheckCircle className="w-4 h-4" />
                      ID Verified
                    </span>
                  )}
                  {worker.bgChecked && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary-foreground/20 rounded-full text-sm font-medium">
                      <Shield className="w-4 h-4" />
                      Background Checked
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary-foreground/20 rounded-full text-sm font-medium">
                    <Briefcase className="w-4 h-4" />
                    {worker.totalJobs} Jobs Completed
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary-foreground/20 rounded-full text-sm font-medium">
                    <Award className="w-4 h-4" />
                    {worker.experience} Years Experience
                  </span>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-6 mt-6 pt-6 border-t border-primary-foreground/20">
                  <div>
                    <p className="text-2xl font-bold">₨{(worker.salary.min / 1000).toFixed(0)}-{(worker.salary.max / 1000).toFixed(0)}K</p>
                    <p className="text-sm opacity-80">Expected Salary/Month</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold flex items-center gap-1">
                      <Clock className="w-5 h-5" />
                      {worker.availability}
                    </p>
                    <p className="text-sm opacity-80">Availability Status</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">8+ Years</p>
                    <p className="text-sm opacity-80">Total Experience</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Action Buttons - Sticky */}
        <div className="sticky top-20 z-20 bg-background border-b border-border py-4">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <div className="flex gap-3">
              <Button 
                variant={activeTab === "overview" ? "default" : "ghost"}
                onClick={() => setActiveTab("overview")}
              >
                Overview
              </Button>
              <Button 
                variant={activeTab === "reviews" ? "default" : "ghost"}
                onClick={() => setActiveTab("reviews")}
              >
                Reviews ({worker.totalReviews})
              </Button>
              <Button 
                variant={activeTab === "schedule" ? "default" : "ghost"}
                onClick={() => setActiveTab("schedule")}
              >
                Schedule
              </Button>
            </div>
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                onClick={() => setIsFavorite(!isFavorite)}
                className={isFavorite ? "text-destructive border-destructive" : ""}
              >
                <Heart className={`w-4 h-4 mr-2 ${isFavorite ? "fill-current" : ""}`} />
                {isFavorite ? "Saved" : "Save"}
              </Button>
              <Button variant="outline">
                <Phone className="w-4 h-4 mr-2" />
                Call
              </Button>
              <Button className="bg-primary hover:bg-primary/90">
                <MessageSquare className="w-4 h-4 mr-2" />
                Message
              </Button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {activeTab === "overview" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                  {/* About */}
                  <Card>
                    <CardHeader>
                      <CardTitle>About</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{worker.bio}</p>
                    </CardContent>
                  </Card>

                  {/* Skills */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Skills & Expertise</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {worker.skills.map((skill) => (
                          <span 
                            key={skill}
                            className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Work History */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Work History</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {worker.workHistory.map((work, index) => (
                        <div 
                          key={index}
                          className="flex items-start gap-4 p-4 border border-border rounded-lg"
                        >
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <Briefcase className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <p className="font-semibold text-foreground">{work.role}</p>
                            <p className="text-muted-foreground">{work.employer}</p>
                            <p className="text-sm text-muted-foreground">{work.duration}</p>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  {/* Languages */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Languages</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-3">
                        {worker.languages.map((lang) => (
                          <span 
                            key={lang}
                            className="px-4 py-2 bg-muted rounded-lg font-medium text-foreground"
                          >
                            {lang}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {activeTab === "reviews" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  {/* Rating Summary */}
                  <Card>
                    <CardContent className="py-6">
                      <div className="flex items-center gap-8">
                        <div className="text-center">
                          <p className="text-5xl font-bold text-foreground">{worker.rating}</p>
                          <div className="flex gap-1 justify-center mt-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star 
                                key={star}
                                className={`w-5 h-5 ${star <= Math.floor(worker.rating) ? "text-amber-500 fill-current" : "text-muted"}`}
                              />
                            ))}
                          </div>
                          <p className="text-muted-foreground mt-1">{worker.totalReviews} reviews</p>
                        </div>
                        <div className="flex-1 space-y-2">
                          {[5, 4, 3, 2, 1].map((rating) => (
                            <div key={rating} className="flex items-center gap-2">
                              <span className="w-3 text-sm text-muted-foreground">{rating}</span>
                              <Star className="w-4 h-4 text-amber-500 fill-current" />
                              <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-amber-500 rounded-full"
                                  style={{ width: rating === 5 ? "75%" : rating === 4 ? "20%" : "5%" }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Individual Reviews */}
                  {worker.reviews.map((review) => (
                    <Card key={review.id}>
                      <CardContent className="py-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <p className="font-semibold text-foreground">{review.reviewer}</p>
                            <p className="text-sm text-muted-foreground">{review.date}</p>
                          </div>
                          <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star 
                                key={star}
                                className={`w-4 h-4 ${star <= review.rating ? "text-amber-500 fill-current" : "text-muted"}`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-muted-foreground">{review.comment}</p>
                      </CardContent>
                    </Card>
                  ))}
                </motion.div>
              )}

              {activeTab === "schedule" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Calendar className="w-5 h-5" />
                        Weekly Availability
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {Object.entries(worker.schedule).map(([day, status]) => (
                          <div 
                            key={day}
                            className="flex items-center justify-between p-4 border border-border rounded-lg"
                          >
                            <span className="font-medium text-foreground capitalize">{day}</span>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                              status === "Off" 
                                ? "bg-muted text-muted-foreground" 
                                : "bg-primary/10 text-primary"
                            }`}>
                              {status}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Hire Card */}
              <Card className="sticky top-40">
                <CardHeader>
                  <CardTitle>Hire {worker.name.split(" ")[0]}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">Expected Salary</p>
                    <p className="text-2xl font-bold text-foreground">
                      ₨{worker.salary.min.toLocaleString()} - ₨{worker.salary.max.toLocaleString()}
                    </p>
                    <p className="text-sm text-muted-foreground">per month</p>
                  </div>

                  <Button className="w-full" size="lg">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                  
                  <Button variant="outline" className="w-full" size="lg">
                    <Phone className="w-4 h-4 mr-2" />
                    Request Call
                  </Button>

                  <div className="pt-4 border-t border-border space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground">Usually responds within 2 hours</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Shield className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground">Verified by Kaam Dekho</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Similar Workers */}
              <Card>
                <CardHeader>
                  <CardTitle>Similar Workers</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { name: "Amina Khatoon", role: "Housemaid", rating: 4.8, salary: "22K" },
                    { name: "Rashida Begum", role: "Housemaid", rating: 4.7, salary: "24K" },
                  ].map((w, i) => (
                    <div key={i} className="flex items-center justify-between p-3 border border-border rounded-lg hover:border-primary/50 cursor-pointer transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-muted"></div>
                        <div>
                          <p className="font-medium text-foreground">{w.name}</p>
                          <p className="text-sm text-muted-foreground">{w.role}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-amber-500">
                          <Star className="w-4 h-4 fill-current" />
                          <span>{w.rating}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">₨{w.salary}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WorkerProfile;
