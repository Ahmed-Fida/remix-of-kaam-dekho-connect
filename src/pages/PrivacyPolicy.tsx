import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 lg:pt-24">
        <section className="section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
              <p className="text-muted-foreground mb-8">Last updated: January 2024</p>

              <div className="prose prose-lg max-w-none">
                <div className="bg-card rounded-2xl p-8 shadow-card space-y-8">
                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                    <p className="text-muted-foreground">
                      Kaam Dekho ("we," "our," or "us") is committed to protecting your privacy. 
                      This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                      information when you use our platform.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Personal Information</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>Name, email address, and phone number</li>
                      <li>CNIC (for verification purposes)</li>
                      <li>Profile photos and documents</li>
                      <li>Address and location data</li>
                      <li>Employment history and skills</li>
                    </ul>
                    
                    <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">Usage Information</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>Log data and device information</li>
                      <li>Usage patterns and preferences</li>
                      <li>Communication history on the platform</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>To create and manage your account</li>
                      <li>To verify your identity and conduct background checks</li>
                      <li>To connect employers with workers</li>
                      <li>To process payments and transactions</li>
                      <li>To improve our services and user experience</li>
                      <li>To send important notifications and updates</li>
                      <li>To prevent fraud and ensure platform safety</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">4. Information Sharing</h2>
                    <p className="text-muted-foreground mb-4">
                      We may share your information with:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>Other users as part of the hiring process (limited profile information)</li>
                      <li>Service providers who assist in our operations</li>
                      <li>Law enforcement when required by law</li>
                      <li>Third parties with your explicit consent</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Security</h2>
                    <p className="text-muted-foreground">
                      We implement industry-standard security measures to protect your data, including:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
                      <li>Encryption of sensitive data</li>
                      <li>Secure server infrastructure</li>
                      <li>Regular security audits</li>
                      <li>Access controls and authentication</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">6. Your Rights</h2>
                    <p className="text-muted-foreground">You have the right to:</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
                      <li>Access your personal data</li>
                      <li>Correct inaccurate information</li>
                      <li>Request deletion of your account</li>
                      <li>Opt-out of marketing communications</li>
                      <li>Export your data</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">7. Cookies</h2>
                    <p className="text-muted-foreground">
                      We use cookies and similar technologies to improve your experience, 
                      analyze usage, and provide personalized content. You can manage cookie 
                      preferences through your browser settings.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">8. Children's Privacy</h2>
                    <p className="text-muted-foreground">
                      Our platform is not intended for users under 18 years of age. We do not 
                      knowingly collect information from children.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">9. Changes to This Policy</h2>
                    <p className="text-muted-foreground">
                      We may update this Privacy Policy from time to time. We will notify you of 
                      any changes by posting the new policy on this page and updating the 
                      "Last updated" date.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">10. Contact Us</h2>
                    <p className="text-muted-foreground">
                      If you have questions about this Privacy Policy, please contact us at:
                    </p>
                    <ul className="list-none text-muted-foreground space-y-2 mt-2">
                      <li>Email: privacy@kaamdeho.pk</li>
                      <li>Phone: +92 321 1234567</li>
                      <li>Address: 123 Main Boulevard, Gulberg III, Lahore</li>
                    </ul>
                  </section>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
