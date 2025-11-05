export default function TermsPage() {
  return (
    <main className="min-h-screen py-12">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl space-y-16">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Terms and Conditions</h1>
            <p className="text-gray-500 dark:text-gray-400">Norton Applications LLC - Effective Date: June 12, 2025</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Website: nortonapplications.com</p>
          </div>

          <div className="prose prose-sm max-w-none text-gray-700 dark:text-gray-300">
            <section className="space-y-6 pb-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">1. Acceptance of Terms</h2>
              <p className="text-sm">
                By engaging Norton Applications LLC for services, you ("Client") agree to be bound by these Terms and Conditions
                ("Terms"). These Terms govern all services provided by Norton Applications LLC ("Company," "we," "us," or "our").
              </p>
            </section>

            <section className="space-y-6 pb-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">2. Services</h2>
              <p className="text-sm">
                Norton Applications LLC provides automation and web development services including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Web application development</li>
                <li>Workflow automation</li>
                <li>API integrations</li>
                <li>Database design and management</li>
                <li>Custom software solutions</li>
                <li>System integrations</li>
                <li>Ongoing maintenance and support</li>
              </ul>
            </section>

            <section className="space-y-8 pb-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">3. Pricing and Payment Terms</h2>

              <div className="space-y-5">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">3.1 Pricing Structure</h3>
                <p className="text-sm">Services are provided on either:</p>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>Hourly basis: Charged at agreed-upon hourly rates</li>
                  <li>Project basis: Fixed price for defined scope of work</li>
                </ul>
              </div>

              <div className="space-y-5">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">3.2 Project-Based Pricing</h3>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>A 50% non-refundable deposit is required upfront before work begins</li>
                  <li>Remaining balance due upon project completion</li>
                  <li>Any scope changes will be quoted separately and require written approval</li>
                </ul>
              </div>

              <div className="space-y-5">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">3.3 Hourly Pricing</h3>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>Work is tracked accurately in 15-minute increments</li>
                  <li>A 50% non-refundable deposit is required based on estimated hours to complete</li>
                  <li>
                    If work is completed in less time than estimated, final charges will accurately reflect only hours
                    spent
                  </li>
                  <li>
                    If work is completed in less than half the estimated time, a pro-rated refund may be provided for
                    unused hours covered by the deposit
                  </li>
                  <li>Additional hours beyond the estimate require pre-approval and additional payment</li>
                </ul>
              </div>

              <div className="space-y-5">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">3.4 Communications Terms</h3>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>60 minutes of complementary discovery and strategy calls are included</li>
                  <li>Additional calls after 60 minutes will be charged at a standard hourly rate, unless otherwise agreed upon.</li>
                  <li>Post-implementation support calls will be charged at a standard hourly rate, unless included in a retainer. </li>
                </ul>
              </div>

              <div className="space-y-5">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">3.5 Payment Terms</h3>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>Invoices are due within 30 days of issuance</li>
                  <li>Late payments may incur a 1.5% monthly service charge</li>
                  <li>Work may be suspended for overdue accounts</li>
                  <li>All payments are non-refundable except as specifically outlined in these Terms</li>
                </ul>
              </div>
            </section>

            <section className="space-y-6 pb-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">4. Ongoing Maintenance and Support</h2>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Ongoing maintenance requires a separate retainer agreement</li>
                <li>Maintenance terms will be outlined in a Statement of Work (SOW) contract</li>
                <li>Maintenance retainers are paid monthly in advance</li>
                <li>Response times and service levels will be defined in the SOW</li>
              </ul>
            </section>

            <section className="space-y-8 pb-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                5. Third-Party Software and Credentials
              </h2>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">5.1 Client Responsibilities</h3>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>
                    Client must pay for all third-party software subscriptions (Zapier, Make, integrated software, etc.)
                  </li>
                  <li>Client must maintain their own credentials and account access</li>
                  <li>Client is responsible for all billing and costs associated with their software accounts</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">5.2 Credential Sharing</h3>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>Client may share credentials instead of adding us as a user</li>
                  <li>Credentials will be shared securely through approved methods</li>
                  <li>All shared credentials will be removed upon project completion</li>
                  <li>We are not liable for any billing, costs, or charges incurred due to credential sharing</li>
                  <li>We are not liable for any leaked, compromised, or misused credentials</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">5.3 Security Disclaimer</h3>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>
                    While we implement security best practices, Client assumes all risks associated with credential
                    sharing
                  </li>
                  <li>Client should change shared credentials immediately upon project completion</li>
                  <li>We recommend using temporary access methods when possible</li>
                </ul>
              </div>
            </section>

            <section className="space-y-8 pb-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">6. Intellectual Property</h2>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  6.1 Client-Owned Work Product
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>
                    All custom code, applications, and deliverables created specifically for Client become Client's
                    property upon final payment
                  </li>
                  <li>Client owns all data, content, and materials provided to us</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">6.2 Company-Owned Assets</h3>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>We retain rights to our proprietary tools, methodologies, and pre-existing code libraries</li>
                  <li>We may use general knowledge and experience gained from projects for future work</li>
                </ul>
              </div>
            </section>

            <section className="space-y-6 pb-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">7. Confidentiality</h2>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>We will maintain confidentiality of all Client information and data</li>
                <li>Client information will not be shared with third parties without written consent</li>
                <li>This obligation survives termination of the agreement</li>
              </ul>
            </section>

            <section className="space-y-8 pb-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">8. Limitation of Liability</h2>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">8.1 General Limitations</h3>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>Our liability is limited to the amount paid for services in the 12 months preceding the claim</li>
                  <li>We are not liable for indirect, incidental, or consequential damages</li>
                  <li>We are not liable for lost profits, data loss, or business interruption</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">8.2 Third-Party Services</h3>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>We are not liable for failures, outages, or issues with third-party services</li>
                  <li>Client acknowledges risks associated with third-party integrations</li>
                  <li>We make no warranties regarding third-party service availability or performance</li>
                </ul>
              </div>
            </section>

            <section className="space-y-8 pb-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">9. Warranties and Disclaimers</h2>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">9.1 Service Warranty</h3>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>We warrant that services will be performed in a professional manner</li>
                  <li>We will correct any defects in our work at no charge for 30 days after delivery</li>
                  <li>This warranty does not cover issues arising from Client modifications or third-party changes</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">9.2 Disclaimers</h3>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>Services are provided "as is" without additional warranties</li>
                  <li>We do not warrant that software will be error-free or uninterrupted</li>
                  <li>We do not warrant compatibility with all systems or future updates</li>
                </ul>
              </div>
            </section>

            <section className="space-y-8 pb-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">10. Project Scope and Changes</h2>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">10.1 Scope Definition</h3>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>All projects require a signed Statement of Work (SOW) defining scope and deliverables</li>
                  <li>Work outside the defined scope requires separate agreement and payment</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">10.2 Change Requests</h3>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>Scope changes must be approved in writing</li>
                  <li>Additional charges will apply for scope modifications</li>
                  <li>Timeline adjustments may be necessary for scope changes</li>
                </ul>
              </div>
            </section>

            <section className="space-y-8 pb-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">11. Communication and Support</h2>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">11.1 Business Hours</h3>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>Standard business hours: Monday - Friday, 12:00 PM - 8:00 PM EST</li>
                  <li>Emergency support available for maintenance clients only</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">11.2 Response Times</h3>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>We will respond to communications within 2 business days</li>
                  <li>Urgent issues will be addressed based on maintenance agreement terms</li>
                </ul>
              </div>
            </section>

            <section className="space-y-8 pb-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">12. Termination</h2>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">12.1 Termination Rights</h3>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>Either party may terminate with 30 days written notice</li>
                  <li>Client may terminate immediately for breach of these Terms</li>
                  <li>We may terminate immediately for non-payment or breach by Client</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">12.2 Effect of Termination</h3>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>All unpaid invoices become immediately due</li>
                  <li>Work product completed and paid for will be delivered</li>
                  <li>Deposits are non-refundable upon termination</li>
                </ul>
              </div>
            </section>

            <section className="space-y-6 pb-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">13. Data Protection and Privacy</h2>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>We comply with applicable data protection laws</li>
                <li>Client data will be handled according to our Privacy Policy</li>
                <li>Client is responsible for ensuring their own compliance with applicable laws</li>
              </ul>
            </section>

            <section className="space-y-6 pb-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">14. Force Majeure</h2>
              <p className="text-sm">
                We are not liable for delays or failures caused by circumstances beyond our reasonable control,
                including natural disasters, government actions, or technical failures.
              </p>
            </section>

            <section className="space-y-6 pb-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">15. Governing Law</h2>
              <p className="text-sm">
                These Terms are governed by the laws of the United States. Any disputes will be resolved in the courts
                of the appropriate jurisdiction.
              </p>
            </section>

            <section className="space-y-6 pb-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">16. Entire Agreement</h2>
              <p className="text-sm">
                These Terms constitute the entire agreement between parties and supersede all prior agreements.
                Modifications must be in writing and signed by both parties.
              </p>
            </section>

            <section className="space-y-6 pb-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">17. Severability</h2>
              <p className="text-sm">
                If any provision of these Terms is found invalid, the remaining provisions will continue in full force
                and effect.
              </p>
            </section>

            <section className="space-y-6 pb-8 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">18. Contact Information</h2>
              <p className="text-sm">For questions regarding these Terms, please contact:</p>
              <div className="bg-muted/50 p-6 rounded-lg">
                <p className="text-sm">
                  <strong>Norton Applications LLC</strong>
                </p>
                <p className="text-sm">Email: admin@nortonapplications.com</p>
                <p className="text-sm">Phone: (917) 266-8809</p>
              </div>
            </section>

            <div className="pt-8">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                By engaging our services, you acknowledge that you have read, understood, and agree to be bound by these
                Terms and Conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}