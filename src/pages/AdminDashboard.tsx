import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Home, Users, Shield, BarChart3, MessageSquare, 
  DollarSign, LogOut, Settings, Bell, CheckCircle, 
  XCircle, AlertTriangle, Eye, UserCheck, FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";

// Demo data for admin
const demoPendingVerifications = [
  { id: "1", name: "Fatima Bibi", role: "Housemaid", submitted: "2 hours ago", documents: ["CNIC", "Reference"] },
  { id: "2", name: "Muhammad Ali", role: "Driver", submitted: "5 hours ago", documents: ["CNIC", "License"] },
  { id: "3", name: "Rashida Begum", role: "Cook", submitted: "1 day ago", documents: ["CNIC"] },
];

const demoRecentUsers = [
  { id: "1", name: "Malik Family", type: "employer", joined: "Today", status: "active" },
  { id: "2", name: "Fatima Bibi", type: "worker", joined: "Today", status: "pending" },
  { id: "3", name: "Ahmed Residence", type: "employer", joined: "Yesterday", status: "active" },
  { id: "4", name: "Amina Khatoon", type: "worker", joined: "Yesterday", status: "verified" },
];

const demoDisputes = [
  { id: "1", employer: "Khan Family", worker: "Rashid", issue: "Payment Dispute", status: "open", priority: "high" },
  { id: "2", employer: "Ali Residence", worker: "Saima", issue: "Work Quality", status: "in_progress", priority: "medium" },
];

const AdminDashboard = () => {
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
    { id: "users", label: "User Management", icon: Users },
    { id: "verifications", label: "Verifications", icon: UserCheck, badge: 3 },
    { id: "disputes", label: "Disputes", icon: AlertTriangle, badge: 2 },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "payments", label: "Payments", icon: DollarSign },
    { id: "content", label: "Content", icon: FileText },
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
            <div className="w-10 h-10 rounded-xl bg-destructive flex items-center justify-center">
              <Shield className="w-5 h-5 text-destructive-foreground" />
            </div>
            <div>
              <span className="font-bold text-xl text-foreground">Admin</span>
              <p className="text-xs text-muted-foreground">Kaam Dekho</p>
            </div>
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
                <span className="font-medium flex-1 text-left">{item.label}</span>
                {item.badge && (
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    activeTab === item.id 
                      ? "bg-primary-foreground/20 text-primary-foreground" 
                      : "bg-destructive text-destructive-foreground"
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* User Section */}
        <div className="p-4 border-t border-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
              <Shield className="w-5 h-5 text-destructive" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-foreground truncate">{user?.email}</p>
              <p className="text-xs text-destructive">Administrator</p>
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
              {sidebarItems.find(i => i.id === activeTab)?.label || "Admin Dashboard"}
            </h1>
            <p className="text-muted-foreground">Manage the Kaam Dekho platform</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-destructive text-destructive-foreground text-xs rounded-full flex items-center justify-center">
                5
              </span>
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
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-muted-foreground text-sm">Total Users</p>
                        <p className="text-3xl font-bold text-foreground">2,547</p>
                        <p className="text-xs text-primary">+12% this month</p>
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
                        <p className="text-muted-foreground text-sm">Verified Workers</p>
                        <p className="text-3xl font-bold text-foreground">1,823</p>
                        <p className="text-xs text-primary">85% verification rate</p>
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
                        <p className="text-muted-foreground text-sm">Active Jobs</p>
                        <p className="text-3xl font-bold text-foreground">456</p>
                        <p className="text-xs text-muted-foreground">127 new this week</p>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center">
                        <FileText className="w-6 h-6 text-amber-500" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-muted-foreground text-sm">Revenue (MTD)</p>
                        <p className="text-3xl font-bold text-foreground">₨1.2M</p>
                        <p className="text-xs text-primary">+8% vs last month</p>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                        <DollarSign className="w-6 h-6 text-muted-foreground" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Pending Actions */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Pending Verifications */}
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
                      Pending Verifications
                    </CardTitle>
                    <button onClick={() => setActiveTab("verifications")} className="text-primary text-sm hover:underline">
                      View All
                    </button>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {demoPendingVerifications.map((user) => (
                      <div key={user.id} className="flex items-center justify-between p-3 border border-border rounded-lg">
                        <div>
                          <p className="font-semibold text-foreground">{user.name}</p>
                          <p className="text-sm text-muted-foreground">{user.role} • {user.submitted}</p>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="text-primary border-primary">
                            <Eye className="w-4 h-4 mr-1" />
                            Review
                          </Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Open Disputes */}
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-destructive rounded-full animate-pulse"></span>
                      Open Disputes
                    </CardTitle>
                    <button onClick={() => setActiveTab("disputes")} className="text-primary text-sm hover:underline">
                      View All
                    </button>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {demoDisputes.map((dispute) => (
                      <div key={dispute.id} className="flex items-center justify-between p-3 border border-border rounded-lg">
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="font-semibold text-foreground">{dispute.issue}</p>
                            <span className={`px-2 py-0.5 rounded text-xs ${
                              dispute.priority === "high" 
                                ? "bg-destructive/10 text-destructive" 
                                : "bg-amber-500/10 text-amber-600"
                            }`}>
                              {dispute.priority}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">{dispute.employer} vs {dispute.worker}</p>
                        </div>
                        <Button size="sm" variant="outline">
                          Resolve
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Recent Users */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Recent Users</CardTitle>
                  <button onClick={() => setActiveTab("users")} className="text-primary text-sm hover:underline">
                    View All
                  </button>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-3 px-4 text-muted-foreground font-medium">User</th>
                          <th className="text-left py-3 px-4 text-muted-foreground font-medium">Type</th>
                          <th className="text-left py-3 px-4 text-muted-foreground font-medium">Joined</th>
                          <th className="text-left py-3 px-4 text-muted-foreground font-medium">Status</th>
                          <th className="text-left py-3 px-4 text-muted-foreground font-medium">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {demoRecentUsers.map((user) => (
                          <tr key={user.id} className="border-b border-border">
                            <td className="py-3 px-4 font-medium text-foreground">{user.name}</td>
                            <td className="py-3 px-4">
                              <span className={`px-2 py-1 rounded text-xs ${
                                user.type === "employer" 
                                  ? "bg-primary/10 text-primary" 
                                  : "bg-secondary/50 text-secondary-foreground"
                              }`}>
                                {user.type}
                              </span>
                            </td>
                            <td className="py-3 px-4 text-muted-foreground">{user.joined}</td>
                            <td className="py-3 px-4">
                              <span className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs ${
                                user.status === "verified" ? "bg-primary/10 text-primary" :
                                user.status === "active" ? "bg-muted text-foreground" :
                                "bg-amber-500/10 text-amber-600"
                              }`}>
                                {user.status === "verified" && <CheckCircle className="w-3 h-3" />}
                                {user.status}
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

          {activeTab === "verifications" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              {demoPendingVerifications.map((user) => (
                <Card key={user.id}>
                  <CardContent className="py-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                          <Users className="w-8 h-8 text-muted-foreground" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">{user.name}</h3>
                          <p className="text-muted-foreground">{user.role}</p>
                          <p className="text-sm text-muted-foreground">Submitted {user.submitted}</p>
                          <div className="flex gap-2 mt-2">
                            {user.documents.map((doc) => (
                              <span key={doc} className="px-2 py-1 bg-muted rounded text-xs text-foreground">
                                {doc}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-2" />
                          View Documents
                        </Button>
                        <Button variant="outline" size="sm" className="text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground">
                          <XCircle className="w-4 h-4 mr-2" />
                          Reject
                        </Button>
                        <Button size="sm" className="bg-primary">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Approve
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          )}

          {(activeTab === "users" || activeTab === "disputes" || activeTab === "analytics" || activeTab === "payments" || activeTab === "content") && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                {activeTab === "users" && <Users className="w-8 h-8 text-muted-foreground" />}
                {activeTab === "disputes" && <AlertTriangle className="w-8 h-8 text-muted-foreground" />}
                {activeTab === "analytics" && <BarChart3 className="w-8 h-8 text-muted-foreground" />}
                {activeTab === "payments" && <DollarSign className="w-8 h-8 text-muted-foreground" />}
                {activeTab === "content" && <FileText className="w-8 h-8 text-muted-foreground" />}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {sidebarItems.find(i => i.id === activeTab)?.label}
              </h3>
              <p className="text-muted-foreground">
                This section is ready for your {activeTab} management needs.
              </p>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
