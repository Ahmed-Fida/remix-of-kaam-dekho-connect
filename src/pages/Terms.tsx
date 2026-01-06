import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const Terms = () => {
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
              <h1 className="text-4xl font-bold text-foreground mb-4">Terms of Service</h1>
              <p className="text-muted-foreground mb-8">Last updated: January 2024</p>

              <div className="prose prose-lg max-w-none">
                <div className="bg-card rounded-2xl p-8 shadow-card space-y-8">
                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                    <p className="text-muted-foreground">
                      By accessing or using Kaam Dekho ("the Platform"), you agree to be bound by 
                      these Terms of Service. If you do not agree to these terms, please do not 
                      use our services.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">2. Description of Service</h2>
                    <p className="text-muted-foreground">
                      Kaam Dekho is a platform that connects employers with domestic workers 
                      (maids, drivers, cooks, nannies, etc.) in Pakistan. We provide verification 
                      services, messaging tools, and review systems to facilitate hiring.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">3. User Accounts</h2>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>You must be at least 18 years old to create an account</li>
                      <li>You are responsible for maintaining the security of your account</li>
                      <li>You must provide accurate and truthful information</li>
                      <li>You may not create multiple accounts or impersonate others</li>
                      <li>We reserve the right to suspend or terminate accounts that violate these terms</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">4. User Conduct</h2>
                    <p className="text-muted-foreground mb-2">Users agree not to:</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>Post false, misleading, or fraudulent information</li>
                      <li>Harass, abuse, or discriminate against other users</li>
                      <li>Use the platform for illegal activities</li>
                      <li>Attempt to circumvent the platform for direct hiring without payment</li>
                      <li>Share personal contact information before verification</li>
                      <li>Post inappropriate, offensive, or harmful content</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">5. Verification Process</h2>
                    <p className="text-muted-foreground">
                      While we make reasonable efforts to verify user identities and conduct 
                      background checks, we cannot guarantee the accuracy of all information. 
                      Users should exercise their own judgment when hiring or working with others.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">6. Payments & Subscriptions</h2>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>Employers may subscribe to paid plans for additional features</li>
                      <li>All payments are processed securely through our payment partners</li>
                      <li>Subscriptions auto-renew unless cancelled before the renewal date</li>
                      <li>Refunds are available within 7 days of purchase</li>
                      <li>We do not take commission from worker salaries</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">7. Employment Relationship</h2>
                    <p className="text-muted-foreground">
                      Kaam Dekho is a platform that facilitates connections between employers and 
                      workers. We are not an employment agency and do not employ workers. The 
                      employment relationship is directly between the employer and worker.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">8. Limitation of Liability</h2>
                    <p className="text-muted-foreground">
                      Kaam Dekho is not liable for:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
                      <li>Actions or conduct of users on or off the platform</li>
                      <li>Quality of work performed by workers</li>
                      <li>Disputes between employers and workers</li>
                      <li>Loss of data or service interruptions</li>
                      <li>Any indirect, incidental, or consequential damages</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">9. Dispute Resolution</h2>
                    <p className="text-muted-foreground">
                      We encourage users to resolve disputes directly. If needed, our support team 
                      can mediate. For unresolved disputes, users agree to binding arbitration 
                      under the laws of Pakistan.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">10. Intellectual Property</h2>
                    <p className="text-muted-foreground">
                      All content, trademarks, and intellectual property on the platform belong to 
                      Kaam Dekho. Users may not copy, reproduce, or distribute our content without 
                      permission.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">11. Modifications</h2>
                    <p className="text-muted-foreground">
                      We reserve the right to modify these Terms of Service at any time. Continued 
                      use of the platform after changes constitutes acceptance of the new terms.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">12. Termination</h2>
                    <p className="text-muted-foreground">
                      We may terminate or suspend your account at any time for violations of these 
                      terms or for any other reason at our discretion. You may also delete your 
                      account at any time through your dashboard.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">13. Contact</h2>
                    <p className="text-muted-foreground">
                      For questions about these Terms of Service, contact us at:
                    </p>
                    <ul className="list-none text-muted-foreground space-y-2 mt-2">
                      <li>Email: legal@kaamdeho.pk</li>
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

export default Terms;
