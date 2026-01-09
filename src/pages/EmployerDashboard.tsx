import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Home, Users, MessageSquare, Briefcase, Heart, Star, 
  LogOut, Plus, Search, Bell, Settings, ChevronRight,
  Calendar, Clock, MapPin, CheckCircle, XCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";

// Demo data for presentation
const demoWorkers = [
  { id: "1", name: "Fatima Bibi", role: "Housemaid", rating: 4.9, reviews: 47, salary: "25,000", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100", verified: true },
  { id: "2", name: "Amina Khatoon", role: "Cook", rating: 4.8, reviews: 32, salary: "30,000", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100", verified: true },
  { id: "3", name: "Rashida Begum", role: "Nanny", rating: 4.7, reviews: 28, salary: "28,000", image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100", verified: true },
];

const demoHires = [
  { id: "1", worker: "Fatima Bibi", role: "Housemaid", status: "active", startDate: "2026-01-01", salary: "25,000" },
  { id: "2", worker: "Amina Khatoon", role: "Cook", status: "completed", startDate: "2025-10-15", endDate: "2025-12-31", salary: "30,000" },
];

const demoMessages = [
  { id: "1", from: "Fatima Bibi", preview: "I can start from Monday...", time: "2 hours ago", unread: true },
  { id: "2", from: "Amina Khatoon", preview: "Thank you for the opportunity!", time: "1 day ago", unread: false },
];

const EmployerDashboard = () => {
  const { user, signOut, userRole, loading } = useAuth();
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
    { id: "browse", label: "Browse Workers", icon: Users },
    { id: "jobs", label: "My Jobs", icon: Briefcase },
    { id: "favorites", label: "Favorites", icon: Heart },
    { id: "messages", label: "Messages", icon: MessageSquare },
    { id: "hires", label: "Hiring History", icon: CheckCircle },
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
                {item.id === "messages" && (
                  <span className="ml-auto bg-destructive text-destructive-foreground text-xs px-2 py-0.5 rounded-full">
                    1
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* User Section */}
        <div className="p-4 border-t border-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-primary font-semibold">
                {user?.email?.[0]?.toUpperCase() || "E"}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-foreground truncate">{user?.email}</p>
              <p className="text-xs text-muted-foreground">Employer</p>
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
            <p className="text-muted-foreground">Welcome back! Here's your overview.</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon">
              <Settings className="w-5 h-5" />
            </Button>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="w-4 h-4 mr-2" />
              Post a Job
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
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-muted-foreground text-sm">Active Hires</p>
                        <p className="text-3xl font-bold text-foreground">3</p>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-muted-foreground text-sm">Open Jobs</p>
                        <p className="text-3xl font-bold text-foreground">2</p>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center">
                        <Briefcase className="w-6 h-6 text-secondary-foreground" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-muted-foreground text-sm">Saved Workers</p>
                        <p className="text-3xl font-bold text-foreground">12</p>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                        <Heart className="w-6 h-6 text-destructive" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-muted-foreground text-sm">Total Spent</p>
                        <p className="text-3xl font-bold text-foreground">₨180K</p>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                        <Star className="w-6 h-6 text-muted-foreground" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Recommended Workers */}
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Recommended Workers</CardTitle>
                    <Link to="/workers" className="text-primary text-sm hover:underline">View All</Link>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {demoWorkers.map((worker) => (
                      <div key={worker.id} className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                        <img 
                          src={worker.image} 
                          alt={worker.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <p className="font-semibold text-foreground">{worker.name}</p>
                            {worker.verified && (
                              <CheckCircle className="w-4 h-4 text-primary" />
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">{worker.role}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 text-amber-500">
                            <Star className="w-4 h-4 fill-current" />
                            <span className="font-medium">{worker.rating}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">₨{worker.salary}/mo</p>
                        </div>
                        <Link to={`/workers/${worker.id}`}>
                          <ChevronRight className="w-5 h-5 text-muted-foreground" />
                        </Link>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Recent Messages */}
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Recent Messages</CardTitle>
                    <button 
                      onClick={() => setActiveTab("messages")}
                      className="text-primary text-sm hover:underline"
                    >
                      View All
                    </button>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {demoMessages.map((msg) => (
                      <div 
                        key={msg.id} 
                        className={`flex items-start gap-4 p-3 rounded-lg transition-colors cursor-pointer ${
                          msg.unread ? "bg-primary/5" : "hover:bg-muted/50"
                        }`}
                      >
                        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                          <span className="text-muted-foreground font-medium">
                            {msg.from[0]}
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <p className="font-semibold text-foreground">{msg.from}</p>
                            <span className="text-xs text-muted-foreground">{msg.time}</span>
                          </div>
                          <p className="text-sm text-muted-foreground truncate">{msg.preview}</p>
                        </div>
                        {msg.unread && (
                          <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                        )}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Current Hires */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Current Hires</CardTitle>
                  <button 
                    onClick={() => setActiveTab("hires")}
                    className="text-primary text-sm hover:underline"
                  >
                    View History
                  </button>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-3 px-4 text-muted-foreground font-medium">Worker</th>
                          <th className="text-left py-3 px-4 text-muted-foreground font-medium">Role</th>
                          <th className="text-left py-3 px-4 text-muted-foreground font-medium">Start Date</th>
                          <th className="text-left py-3 px-4 text-muted-foreground font-medium">Salary</th>
                          <th className="text-left py-3 px-4 text-muted-foreground font-medium">Status</th>
                          <th className="text-left py-3 px-4 text-muted-foreground font-medium">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {demoHires.map((hire) => (
                          <tr key={hire.id} className="border-b border-border">
                            <td className="py-3 px-4 font-medium text-foreground">{hire.worker}</td>
                            <td className="py-3 px-4 text-muted-foreground">{hire.role}</td>
                            <td className="py-3 px-4 text-muted-foreground">{hire.startDate}</td>
                            <td className="py-3 px-4 text-foreground">₨{hire.salary}</td>
                            <td className="py-3 px-4">
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                hire.status === "active" 
                                  ? "bg-primary/10 text-primary" 
                                  : "bg-muted text-muted-foreground"
                              }`}>
                                {hire.status === "active" ? "Active" : "Completed"}
                              </span>
                            </td>
                            <td className="py-3 px-4">
                              <Button variant="ghost" size="sm">View</Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {activeTab === "browse" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input 
                    type="text"
                    placeholder="Search workers..."
                    className="w-full h-11 pl-10 pr-4 rounded-lg border border-border bg-background text-foreground"
                  />
                </div>
                <Button variant="outline">Filters</Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {demoWorkers.map((worker) => (
                  <Card key={worker.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <img 
                          src={worker.image} 
                          alt={worker.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-foreground">{worker.name}</h3>
                            {worker.verified && <CheckCircle className="w-4 h-4 text-primary" />}
                          </div>
                          <p className="text-muted-foreground">{worker.role}</p>
                          <div className="flex items-center gap-1 mt-1 text-amber-500">
                            <Star className="w-4 h-4 fill-current" />
                            <span>{worker.rating}</span>
                            <span className="text-muted-foreground">({worker.reviews} reviews)</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                        <p className="font-semibold text-foreground">₨{worker.salary}/mo</p>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Heart className="w-4 h-4" />
                          </Button>
                          <Link to={`/workers/${worker.id}`}>
                            <Button size="sm">View Profile</Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "messages" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-card rounded-xl border border-border overflow-hidden"
            >
              <div className="grid grid-cols-3 h-[600px]">
                {/* Conversation List */}
                <div className="border-r border-border">
                  <div className="p-4 border-b border-border">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input 
                        type="text"
                        placeholder="Search conversations..."
                        className="w-full h-10 pl-9 pr-4 rounded-lg border border-border bg-background text-sm"
                      />
                    </div>
                  </div>
                  <div className="overflow-auto">
                    {demoMessages.map((msg) => (
                      <div 
                        key={msg.id}
                        className={`p-4 border-b border-border cursor-pointer hover:bg-muted/50 ${
                          msg.unread ? "bg-primary/5" : ""
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                            <span className="font-medium text-muted-foreground">{msg.from[0]}</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <p className="font-semibold text-foreground">{msg.from}</p>
                              <span className="text-xs text-muted-foreground">{msg.time}</span>
                            </div>
                            <p className="text-sm text-muted-foreground truncate">{msg.preview}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Chat Area */}
                <div className="col-span-2 flex flex-col">
                  <div className="p-4 border-b border-border flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                      <span className="font-medium">F</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Fatima Bibi</p>
                      <p className="text-xs text-muted-foreground">Online</p>
                    </div>
                  </div>
                  <div className="flex-1 p-4 space-y-4 overflow-auto bg-muted/20">
                    <div className="flex justify-start">
                      <div className="bg-card border border-border rounded-lg px-4 py-2 max-w-xs">
                        <p className="text-foreground">Assalam o Alaikum! I saw your job posting for a housemaid.</p>
                        <span className="text-xs text-muted-foreground">10:30 AM</span>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-primary text-primary-foreground rounded-lg px-4 py-2 max-w-xs">
                        <p>Walaikum Assalam! Yes, we are looking for someone experienced.</p>
                        <span className="text-xs opacity-70">10:32 AM</span>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-card border border-border rounded-lg px-4 py-2 max-w-xs">
                        <p className="text-foreground">I have 5 years experience. I can start from Monday.</p>
                        <span className="text-xs text-muted-foreground">10:35 AM</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 border-t border-border">
                    <div className="flex gap-2">
                      <input 
                        type="text"
                        placeholder="Type a message..."
                        className="flex-1 h-11 px-4 rounded-lg border border-border bg-background"
                      />
                      <Button>Send</Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {(activeTab === "jobs" || activeTab === "favorites" || activeTab === "hires") && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                {activeTab === "jobs" && <Briefcase className="w-8 h-8 text-muted-foreground" />}
                {activeTab === "favorites" && <Heart className="w-8 h-8 text-muted-foreground" />}
                {activeTab === "hires" && <CheckCircle className="w-8 h-8 text-muted-foreground" />}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {activeTab === "jobs" && "Your Posted Jobs"}
                {activeTab === "favorites" && "Your Saved Workers"}
                {activeTab === "hires" && "Your Hiring History"}
              </h3>
              <p className="text-muted-foreground mb-4">
                {activeTab === "jobs" && "You haven't posted any jobs yet."}
                {activeTab === "favorites" && "Save workers you like to view them here."}
                {activeTab === "hires" && "Your complete hiring history will appear here."}
              </p>
              <Button>
                {activeTab === "jobs" && "Post Your First Job"}
                {activeTab === "favorites" && "Browse Workers"}
                {activeTab === "hires" && "Start Hiring"}
              </Button>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
};

export default EmployerDashboard;
