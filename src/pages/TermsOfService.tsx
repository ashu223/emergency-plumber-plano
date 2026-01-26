import { SEO } from "@/components/SEO";
import { siteConfig } from "@/lib/city.config";

const TermsOfService = () => {
  return (
    <>
      <SEO
        title={`Terms of Service - ${siteConfig.businessName}`}
        description={`Terms of Service for ${siteConfig.businessName}. Read our terms and conditions for using our plumbing services.`}
      />

      {/* Hero */}
      <section className="hero-gradient text-primary-foreground py-12 lg:py-16">
        <div className="container">
          <h1 className="font-display text-3xl md:text-4xl font-bold">Terms of Service</h1>
          <p className="opacity-90 mt-2">Last Updated: January 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <div className="bg-card rounded-xl p-6 md:p-8 shadow-soft space-y-6">
              <div>
                <h2 className="font-display text-xl font-bold mb-3">Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using the {siteConfig.businessName} website ("Site"), you agree to be bound by these Terms
                  of Service ("Terms"). If you do not agree to these Terms, please do not use our Site or services.
                  These Terms apply to all visitors, users, and others who access or use the Site.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold mb-3">Services Overview</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {siteConfig.businessName} operates as a lead generation and referral service. We do not perform plumbing
                  services directly. Our role is to connect consumers with independent third-party plumbing
                  professionals and service providers operating in {siteConfig.city}, {siteConfig.state}. Any plumbing services are
                  performed solely by third-party providers, not by {siteConfig.businessName}.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold mb-3">Service Requests and Lead Generation</h2>
                <p className="text-muted-foreground leading-relaxed">
                  When you submit a service request through our website or by phone, you consent to being contacted by
                  {siteConfig.businessName} or a third-party plumbing service provider regarding your request. Submission of a
                  request does not guarantee service availability or completion. All services are subject to provider
                  availability, inspection, quoted pricing, and your acceptance of the terms offered by the service
                  provider.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold mb-3">Pricing and Payment</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All pricing discussed on our website is for informational purposes only. Pricing, payment terms, and
                  service fees are determined solely by the third-party plumbing service provider after assessing the
                  work required. {siteConfig.businessName} does not set pricing or collect payment for services unless
                  explicitly stated.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold mb-3">Warranties and Guarantees</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Any warranties, guarantees, or service assurances are provided solely by the third-party plumbing
                  professionals who perform the services. {siteConfig.businessName} does not provide warranties and is not
                  responsible for the quality, safety, or outcome of services performed by third-party providers.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold mb-3">Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To the maximum extent permitted by applicable law, {siteConfig.businessName} shall not be liable for any
                  indirect, incidental, special, consequential, or punitive damages, including without limitation, loss
                  of profits, data, use, goodwill, or other intangible losses resulting from your use of our Site or
                  services. Our total liability for any claim arising from our services shall not exceed the amount paid
                  for the specific service giving rise to the claim. {siteConfig.businessName} is not responsible for the acts,
                  omissions, negligence, or misconduct of third-party service providers.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold mb-3">Disclaimers</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The information on this Site is provided "as is" without warranties of any kind. While we strive for
                  accuracy, we do not guarantee that the Site will be error-free, uninterrupted, or free of harmful
                  components. Plumbing advice on this Site is general in nature and should not replace professional
                  assessment of your specific situation.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold mb-3">Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content on this Site, including text, graphics, logos, images, and software, is the property of
                  {siteConfig.businessName} and is protected by intellectual property laws. You may not reproduce, distribute,
                  or create derivative works from our content without express written permission.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold mb-3">Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the State of {siteConfig.state},
                  without regard to its conflict of law provisions. Any disputes arising from these Terms or your use of
                  our Site shall be resolved in the courts of {siteConfig.city}, {siteConfig.state}.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold mb-3">Modifications to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these Terms at any time. We will notify users of any material changes
                  by posting the new Terms on this page. Your continued use of the Site after changes constitutes
                  acceptance of the modified Terms.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold mb-3">Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about these Terms of Service, please contact us at:
                </p>
                <div className="mt-3 text-muted-foreground">
                  <p>
                    <strong>{siteConfig.businessName}</strong>
                  </p>
                  <p>{siteConfig.address.full}</p>
                  <p>Phone: {siteConfig.displayPhone}</p>
                  <p>Email: {siteConfig.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsOfService;
