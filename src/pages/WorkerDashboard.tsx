import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Home, Briefcase, MessageSquare, User, Calendar, 
  DollarSign, LogOut, Star, Bell, Settings, 
  FileText, CheckCircle, Clock, MapPin, Edit, Upload
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";

// Demo data
const demoJobs = [
  { id: "1", title: "Live-in Housemaid Needed", employer: "Malik Family", location: "DHA Phase 5, Lahore", salary: "25,000 - 30,000", posted: "2 days ago", status: "open" },
  { id: "2", title: "Experienced Cook Required", employer: "Ahmed Residence", location: "Gulberg III, Lahore", salary: "30,000 - 35,000", posted: "1 day ago", status: "open" },
  { id: "3", title: "Nanny for 2 Children", employer: "Khan Family", location: "Bahria Town, Lahore", salary: "28,000 - 32,000", posted: "3 hours ago", status: "open" },
];

const demoApplications = [
  { id: "1", job: "Housemaid - Malik Family", status: "pending", applied: "Jan 5, 2026" },
  { id: "2", job: "Cook - Ahmed Residence", status: "accepted", applied: "Jan 3, 2026" },
];

const demoEarnings = [
  { month: "Dec 2025", amount: "25,000", employer: "Previous Family" },
  { month: "Nov 2025", amount: "25,000", employer: "Previous Family" },
];

const WorkerDashboard = () => {
  const { user, signOut, loading } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    if (!loading && !user) {
      navigate("/login");
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const sidebarItems = [
    { id: "overview", label: "Overview", icon: Home },
    { id: "jobs", label: "Find Jobs", icon: Briefcase },
    { id: "applications", label: "My Applications", icon: FileText },
    { id: "messages", label: "Messages", icon: MessageSquare },
    { id: "earnings", label: "Earnings", icon: DollarSign },
    { id: "schedule", label: "Schedule", icon: Calendar },
    { id: "profile", label: "My Profile", icon: User },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <motion.aside 
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="w-64 bg-card border-r border-border flex flex-col"
      >
        {/* Logo */}
        <div className="p-6 border-b border-border">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">K</span>
            </div>
            <span className="font-bold text-xl text-foreground">Kaam Dekho</span>
          </Link>
        </div>

        {/* Nav Items */}
        <nav className="flex-1 p-4 space-y-1">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === item.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* User Section */}
        <div className="p-4 border-t border-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center">
              <span className="text-secondary-foreground font-semibold">
                {user?.email?.[0]?.toUpperCase() || "W"}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-foreground truncate">{user?.email}</p>
              <p className="text-xs text-muted-foreground">Worker</p>
            </div>
          </div>
          <Button variant="outline" size="sm" className="w-full" onClick={handleSignOut}>
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Top Bar */}
        <header className="bg-card border-b border-border px-8 py-4 flex items-center justify-between sticky top-0 z-10">
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              {sidebarItems.find(i => i.id === activeTab)?.label || "Dashboard"}
            </h1>
            <p className="text-muted-foreground">Manage your work and applications</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon">
              <Settings className="w-5 h-5" />
            </Button>
          </div>
        </header>

        {/* Content Area */}
        <div className="p-8">
          {activeTab === "overview" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              {/* Profile Completion Banner */}
              <Card className="bg-gradient-hero border-0">
                <CardContent className="py-6">
                  <div className="flex items-center justify-between text-primary-foreground">
                    <div>
                      <h3 className="text-lg font-semibold">Complete Your Profile</h3>
                      <p className="opacity-90">Add more details to increase your chances of getting hired</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-3xl font-bold">65%</p>
                        <p className="text-sm opacity-90">Profile Complete</p>
                      </div>
                      <Button variant="secondary" onClick={() => setActiveTab("profile")}>
                        Complete Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-muted-foreground text-sm">Total Applications</p>
                        <p className="text-3xl font-bold text-foreground">8</p>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <FileText className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-muted-foreground text-sm">Jobs Completed</p>
                        <p className="text-3xl font-bold text-foreground">12</p>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-secondary-foreground" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-muted-foreground text-sm">Rating</p>
                        <div className="flex items-center gap-1">
                          <p className="text-3xl font-bold text-foreground">4.8</p>
                          <Star className="w-5 h-5 text-amber-500 fill-current" />
                        </div>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center">
                        <Star className="w-6 h-6 text-amber-500" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-muted-foreground text-sm">This Month</p>
                        <p className="text-3xl font-bold text-foreground">₨25K</p>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                        <DollarSign className="w-6 h-6 text-muted-foreground" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Jobs and Applications */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Latest Jobs Near You</CardTitle>
                    <button onClick={() => setActiveTab("jobs")} className="text-primary text-sm hover:underline">
                      View All
                    </button>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {demoJobs.slice(0, 3).map((job) => (
                      <div key={job.id} className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-semibold text-foreground">{job.title}</h4>
                            <p className="text-sm text-muted-foreground">{job.employer}</p>
                            <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {job.location}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {job.posted}
                              </span>
                            </div>
                          </div>
                          <p className="font-semibold text-primary">₨{job.salary}</p>
                        </div>
                        <Button className="w-full mt-3" variant="outline" size="sm">
                          Apply Now
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>My Applications</CardTitle>
                    <button onClick={() => setActiveTab("applications")} className="text-primary text-sm hover:underline">
                      View All
                    </button>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {demoApplications.map((app) => (
                      <div key={app.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                        <div>
                          <p className="font-medium text-foreground">{app.job}</p>
                          <p className="text-sm text-muted-foreground">Applied on {app.applied}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          app.status === "accepted" 
                            ? "bg-primary/10 text-primary" 
                            : "bg-amber-500/10 text-amber-600"
                        }`}>
                          {app.status === "accepted" ? "Accepted" : "Pending"}
                        </span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          )}

          {activeTab === "jobs" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              {demoJobs.map((job) => (
                <Card key={job.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="py-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{job.title}</h3>
                        <p className="text-muted-foreground">{job.employer}</p>
                        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {job.posted}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-primary">₨{job.salary}</p>
                        <p className="text-sm text-muted-foreground">per month</p>
                      </div>
                    </div>
                    <div className="flex gap-3 mt-4">
                      <Button className="flex-1">Apply Now</Button>
                      <Button variant="outline">Save Job</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          )}

          {activeTab === "profile" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl space-y-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Profile Photo</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-6">
                    <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center">
                      <User className="w-12 h-12 text-muted-foreground" />
                    </div>
                    <div>
                      <Button variant="outline">
                        <Upload className="w-4 h-4 mr-2" />
                        Upload Photo
                      </Button>
                      <p className="text-sm text-muted-foreground mt-2">JPG, PNG. Max 2MB</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Full Name</label>
                      <input 
                        type="text" 
                        placeholder="Enter your name"
                        className="w-full h-11 px-4 rounded-lg border border-border bg-background"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Phone Number</label>
                      <input 
                        type="tel" 
                        placeholder="+92 300 1234567"
                        className="w-full h-11 px-4 rounded-lg border border-border bg-background"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">CNIC Number</label>
                    <input 
                      type="text" 
                      placeholder="12345-1234567-1"
                      className="w-full h-11 px-4 rounded-lg border border-border bg-background"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">City</label>
                    <select className="w-full h-11 px-4 rounded-lg border border-border bg-background">
                      <option>Lahore</option>
                      <option>Karachi</option>
                      <option>Islamabad</option>
                      <option>Rawalpindi</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Bio</label>
                    <textarea 
                      rows={4}
                      placeholder="Tell employers about yourself..."
                      className="w-full p-4 rounded-lg border border-border bg-background resize-none"
                    />
                  </div>
                  <Button className="w-full">Save Changes</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Skills & Experience</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Role Type</label>
                    <select className="w-full h-11 px-4 rounded-lg border border-border bg-background">
                      <option>Housemaid</option>
                      <option>Cook</option>
                      <option>Nanny</option>
                      <option>Driver</option>
                      <option>Gardener</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Years of Experience</label>
                    <input 
                      type="number" 
                      placeholder="5"
                      className="w-full h-11 px-4 rounded-lg border border-border bg-background"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Expected Salary (PKR)</label>
                    <div className="grid grid-cols-2 gap-4">
                      <input 
                        type="number" 
                        placeholder="Min: 20,000"
                        className="w-full h-11 px-4 rounded-lg border border-border bg-background"
                      />
                      <input 
                        type="number" 
                        placeholder="Max: 30,000"
                        className="w-full h-11 px-4 rounded-lg border border-border bg-background"
                      />
                    </div>
                  </div>
                  <Button className="w-full">Update Skills</Button>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {(activeTab === "applications" || activeTab === "messages" || activeTab === "earnings" || activeTab === "schedule") && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                {activeTab === "applications" && <FileText className="w-8 h-8 text-muted-foreground" />}
                {activeTab === "messages" && <MessageSquare className="w-8 h-8 text-muted-foreground" />}
                {activeTab === "earnings" && <DollarSign className="w-8 h-8 text-muted-foreground" />}
                {activeTab === "schedule" && <Calendar className="w-8 h-8 text-muted-foreground" />}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {activeTab === "applications" && "Your Applications"}
                {activeTab === "messages" && "Your Messages"}
                {activeTab === "earnings" && "Your Earnings"}
                {activeTab === "schedule" && "Your Schedule"}
              </h3>
              <p className="text-muted-foreground">
                This section will show your {activeTab} data.
              </p>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
};

export default WorkerDashboard;
