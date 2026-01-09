import { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, EyeOff, Mail, Lock, User, Building2, Briefcase, Shield, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { z } from "zod";

type AuthMode = "login" | "signup";
type UserType = "employer" | "worker" | "admin";

const emailSchema = z.string().email("Please enter a valid email address");
const passwordSchema = z.string().min(6, "Password must be at least 6 characters");
const fullNameSchema = z.string().min(2, "Name must be at least 2 characters").max(100);

const Auth = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { user, signUp, signIn, loading: authLoading, userRole } = useAuth();
  
  const [mode, setMode] = useState<AuthMode>((searchParams.get("mode") as AuthMode) || "login");
  const [userType, setUserType] = useState<UserType>((searchParams.get("type") as UserType) || "employer");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [waitingForRole, setWaitingForRole] = useState(false);

  useEffect(() => {
    if (user && userRole) {
      // Redirect based on role
      if (userRole === 'admin') {
        navigate('/admin', { replace: true });
      } else if (userRole === 'employer') {
        navigate('/employer/dashboard', { replace: true });
      } else if (userRole === 'worker') {
        navigate('/worker/dashboard', { replace: true });
      }
    } else if (user && !userRole && !authLoading) {
      // User logged in but role not yet fetched - show loading
      setWaitingForRole(true);
    }
  }, [user, userRole, navigate, authLoading]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    try {
      emailSchema.parse(formData.email);
    } catch (e: any) {
      newErrors.email = e.errors[0]?.message || "Invalid email";
    }
    
    try {
      passwordSchema.parse(formData.password);
    } catch (e: any) {
      newErrors.password = e.errors[0]?.message || "Invalid password";
    }
    
    if (mode === "signup") {
      try {
        fullNameSchema.parse(formData.fullName);
      } catch (e: any) {
        newErrors.fullName = e.errors[0]?.message || "Invalid name";
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setLoading(true);
    
    if (mode === "login") {
      const { error } = await signIn(formData.email, formData.password);
      if (!error) {
        // Navigation handled by useEffect
      }
    } else {
      const { error } = await signUp(formData.email, formData.password, formData.fullName, userType);
      if (!error) {
        setMode("login");
        setFormData({ ...formData, password: "" });
      }
    }
    
    setLoading(false);
  };

  const getUserTypeIcon = (type: UserType) => {
    switch (type) {
      case "employer": return Building2;
      case "worker": return Briefcase;
      case "admin": return Shield;
    }
  };

  const getUserTypeLabel = (type: UserType) => {
    switch (type) {
      case "employer": return "Employer";
      case "worker": return "Worker";
      case "admin": return "Admin";
    }
  };

  const getUserTypeDescription = (type: UserType) => {
    switch (type) {
      case "employer": return "Hire verified domestic workers";
      case "worker": return "Find work opportunities";
      case "admin": return "Platform management";
    }
  };

  if (authLoading || waitingForRole) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">
            {waitingForRole ? "Preparing your dashboard..." : "Loading..."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        {/* Back to Home */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="bg-card rounded-2xl shadow-xl p-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2 justify-center mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center shadow-md">
                <span className="text-primary-foreground font-bold text-xl">K</span>
              </div>
            </Link>
            <h1 className="text-2xl font-bold text-foreground">
              {mode === "login" ? "Welcome Back" : "Create Account"}
            </h1>
            <p className="text-muted-foreground mt-1 font-urdu">
              {mode === "login" ? "خوش آمدید" : "اکاؤنٹ بنائیں"}
            </p>
          </div>

          {/* User Type Selection (Signup only) */}
          {mode === "signup" && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-foreground mb-3">
                I want to:
              </label>
              <div className="grid grid-cols-2 gap-3">
                {(["employer", "worker"] as UserType[]).map((type) => {
                  const Icon = getUserTypeIcon(type);
                  return (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setUserType(type)}
                      className={`p-4 rounded-xl border-2 transition-all text-left ${
                        userType === type
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <Icon className={`w-6 h-6 mb-2 ${userType === type ? "text-primary" : "text-muted-foreground"}`} />
                      <p className="font-semibold text-foreground">{getUserTypeLabel(type)}</p>
                      <p className="text-xs text-muted-foreground">{getUserTypeDescription(type)}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Auth Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === "signup" && (
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Enter your full name"
                    className={`w-full h-12 pl-10 pr-4 rounded-lg border ${
                      errors.fullName ? "border-destructive" : "border-border"
                    } bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary`}
                  />
                </div>
                {errors.fullName && <p className="text-destructive text-sm mt-1">{errors.fullName}</p>}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter your email"
                  className={`w-full h-12 pl-10 pr-4 rounded-lg border ${
                    errors.email ? "border-destructive" : "border-border"
                  } bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary`}
                />
              </div>
              {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="Enter your password"
                  className={`w-full h-12 pl-10 pr-12 rounded-lg border ${
                    errors.password ? "border-destructive" : "border-border"
                  } bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && <p className="text-destructive text-sm mt-1">{errors.password}</p>}
            </div>

            <Button 
              type="submit" 
              variant="hero" 
              size="lg" 
              className="w-full" 
              disabled={loading}
            >
              {loading ? (
                <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground"></span>
              ) : mode === "login" ? "Sign In" : "Create Account"}
            </Button>
          </form>

          {/* Toggle Mode */}
          <div className="mt-6 text-center">
            <p className="text-muted-foreground">
              {mode === "login" ? "Don't have an account?" : "Already have an account?"}
              {" "}
              <button
                onClick={() => setMode(mode === "login" ? "signup" : "login")}
                className="text-primary font-semibold hover:underline"
              >
                {mode === "login" ? "Sign Up" : "Sign In"}
              </button>
            </p>
          </div>

          {/* Admin Login Link */}
          {mode === "login" && (
            <div className="mt-4 text-center">
              <Link 
                to="/admin/login" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Admin Login →
              </Link>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Auth;
