import { SEO } from "@/components/SEO";

const PrivacyPolicy = () => {
  return (
    <>
      <SEO 
        title="Privacy Policy"
        description="Privacy Policy for Plumbing Help Desk. Learn how we collect, use, and protect your personal information."
      />

      {/* Hero */}
      <section className="hero-gradient text-primary-foreground py-12 lg:py-16">
        <div className="container">
          <h1 className="font-display text-3xl md:text-4xl font-bold">
            Privacy Policy
          </h1>
          <p className="opacity-90 mt-2">Last Updated: January 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <div className="bg-card rounded-xl p-6 md:p-8 shadow-soft space-y-6">
              
              <div>
                <h2 className="font-display text-xl font-bold mb-3">Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Plumbing Help Desk ("we," "us," or "our") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our plumbing services in the State of Texas.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold mb-3">Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  We may collect the following types of information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Personal Information:</strong> Name, phone number, email address, and physical address when you contact us or request services.</li>
                  <li><strong>Service Information:</strong> Details about the plumbing services you request, including property address and service history.</li>
                  <li><strong>Device Information:</strong> IP address, browser type, operating system, and device identifiers when you visit our website.</li>
                  <li><strong>Usage Data:</strong> Pages visited, time spent on pages, and how you interact with our website.</li>
                  <li><strong>Communication Data:</strong> Records of phone calls, emails, and messages exchanged with our team.</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold mb-3">How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  We use your information for the following purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>To provide and manage plumbing services you request</li>
                  <li>To communicate with you about appointments, estimates, and service updates</li>
                  <li>To process payments and maintain billing records</li>
                  <li>To send promotional materials and service reminders (with your consent)</li>
                  <li>To improve our website and customer experience</li>
                  <li>To comply with legal obligations and protect our rights</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold mb-3">Cookies and Tracking Technologies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and for marketing purposes. We use Microsoft Bing UET and Google Analytics to understand how visitors interact with our site. You can control cookie preferences through your browser settings.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold mb-3">Call Information & Lead Generation Disclosure</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Plumbing Help Desk operates as a lead generation and referral service. When you call the phone number displayed on our website, your call may be routed to a third-party plumbing service provider or independent contractor who can assist with your request. Calls may be monitored or recorded for quality assurance, training, and compliance purposes.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold mb-3">Third-Party Disclosure</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  We may share your information with:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Plumbing professionals or service providers who may receive your information in order to fulfill your service request</li>
                  <li>Service providers who assist in operating our business (payment processors, scheduling software)</li>
                  <li>Advertising partners for marketing purposes</li>
                  <li>Legal authorities when required by law</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  We do not sell your personal information to third parties.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold mb-3">Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold mb-3">California Privacy Rights</h2>
                <p className="text-muted-foreground leading-relaxed">
                  California residents may have additional rights under the California Consumer Privacy Act (CCPA), including the right to request disclosure of data collection practices and the right to request deletion of personal information. We do not sell personal information as defined under the CCPA. Requests can be made using the contact details listed above.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold mb-3">Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Depending on your location, you may have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold mb-3">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about this Privacy Policy or wish to exercise your rights, please contact us at:
                </p>
                <div className="mt-3 text-muted-foreground">
                  <p><strong>Plumbing Help Desk</strong></p>
                  <p>1617 Park Pl Ave, Fort Worth, TX 76110</p>
                  <p>Phone: (469) 581-3414</p>
                  <p>Email: support@theplumbinghelpdesk.com</p>
                </div>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold mb-3">Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
