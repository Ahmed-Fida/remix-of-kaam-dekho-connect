import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Heart, 
  Target, 
  Users, 
  Lightbulb, 
  Globe, 
  Shield,
  Award,
  TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const values = [
  {
    icon: Shield,
    title: "Trust",
    description: "We verify every worker and employer, creating a safe space for everyone."
  },
  {
    icon: Heart,
    title: "Dignity",
    description: "We treat every domestic worker with respect and ensure fair opportunities."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We use technology to solve real problems in the hiring process."
  },
  {
    icon: Users,
    title: "Community",
    description: "We're building a community where workers and employers thrive together."
  }
];

const milestones = [
  { year: "2023", title: "Founded", description: "Kaam Dekho was born with a mission to transform domestic hiring in Pakistan." },
  { year: "2023", title: "1,000 Workers", description: "Reached our first milestone of verified workers on the platform." },
  { year: "2024", title: "10,000 Hires", description: "Facilitated ten thousand successful hires across Pakistan." },
  { year: "2024", title: "5 Cities", description: "Expanded operations to Lahore, Karachi, Islamabad, Rawalpindi, and Faisalabad." },
];

const team = [
  {
    name: "Ahmed Khan",
    role: "Founder & CEO",
    bio: "Former tech executive with a passion for solving real-world problems."
  },
  {
    name: "Sara Malik",
    role: "Head of Operations",
    bio: "10+ years in HR and operations, ensuring quality at every step."
  },
  {
    name: "Usman Ali",
    role: "Head of Technology",
    bio: "Building the tech that makes trusted hiring possible."
  },
  {
    name: "Fatima Hassan",
    role: "Head of Trust & Safety",
    bio: "Leading our verification and safety initiatives."
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 lg:pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-primary-foreground py-16 lg:py-24">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                  About Kaam Dekho
                </h1>
                <p className="text-lg sm:text-xl text-primary-foreground/80 mb-4">
                  We're on a mission to transform how Pakistan finds and hires 
                  trusted domestic workers—with dignity, safety, and fairness for all.
                </p>
                <p className="text-xl font-urdu">
                  ہم پاکستان میں گھریلو ملازمین کی تلاش کو بدل رہے ہیں
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-8 shadow-card"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground text-lg">
                  To create a trusted digital platform that connects households and offices 
                  with verified domestic workers, ensuring safety, transparency, and fair 
                  opportunities for everyone involved.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-8 shadow-card"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                  <Globe className="w-7 h-7 text-secondary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-muted-foreground text-lg">
                  To become Pakistan's most trusted platform for domestic hiring, 
                  empowering millions of workers with dignified employment and giving 
                  employers peace of mind through verified, quality service.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Problem We Solve */}
        <section className="section-padding bg-muted/50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  The Problem We're Solving
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-2xl p-6 shadow-card"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-4">For Employers</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-destructive">✗</span>
                      Finding reliable workers through word-of-mouth is unreliable
                    </li>
                    <li className="flex gap-2">
                      <span className="text-destructive">✗</span>
                      No way to verify background or past employment
                    </li>
                    <li className="flex gap-2">
                      <span className="text-destructive">✗</span>
                      Safety concerns when hiring strangers
                    </li>
                    <li className="flex gap-2">
                      <span className="text-destructive">✗</span>
                      No reviews or ratings to guide decisions
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-card rounded-2xl p-6 shadow-card"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-4">For Workers</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-destructive">✗</span>
                      Limited access to job opportunities
                    </li>
                    <li className="flex gap-2">
                      <span className="text-destructive">✗</span>
                      No platform to showcase skills and experience
                    </li>
                    <li className="flex gap-2">
                      <span className="text-destructive">✗</span>
                      Unfair treatment and no recourse
                    </li>
                    <li className="flex gap-2">
                      <span className="text-destructive">✗</span>
                      Difficulty building a professional reputation
                    </li>
                  </ul>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-8 bg-gradient-hero text-primary-foreground rounded-2xl p-8 text-center"
              >
                <h3 className="text-2xl font-bold mb-4">Kaam Dekho is the Solution</h3>
                <p className="text-primary-foreground/80 text-lg">
                  We bridge the gap with verified profiles, background checks, secure messaging, 
                  and a two-way review system that benefits everyone.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Our Values
              </h2>
              <p className="text-lg text-muted-foreground">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 shadow-card text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding bg-muted/50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Our Journey
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative flex items-center gap-4 mb-8 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <div className="bg-card rounded-xl p-4 shadow-card ml-8 md:ml-0">
                        <div className="text-sm text-primary font-semibold mb-1">{milestone.year}</div>
                        <h3 className="font-semibold text-foreground mb-1">{milestone.title}</h3>
                        <p className="text-sm text-muted-foreground">{milestone.description}</p>
                      </div>
                    </div>
                    <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center -translate-x-1/2 z-10">
                      <TrendingUp className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Meet Our Team
              </h2>
              <p className="text-lg text-muted-foreground">
                The people behind Kaam Dekho
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 shadow-card text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-hero flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-primary mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-gradient-hero text-primary-foreground">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Award className="w-16 h-16 mx-auto mb-6 opacity-80" />
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Join Our Growing Community
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Whether you're looking to hire or looking for work, Kaam Dekho is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline-light" size="lg" asChild>
                  <Link to="/auth?mode=signup&type=employer">I Want to Hire</Link>
                </Button>
                <Button variant="ghost" size="lg" className="text-primary-foreground hover:bg-primary-foreground/10" asChild>
                  <Link to="/auth?mode=signup&type=worker">I Want to Work</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
