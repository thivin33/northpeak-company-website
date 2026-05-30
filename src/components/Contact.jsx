import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from './ui/Container.jsx';
import { SectionHeader } from './ui/SectionHeader.jsx';
import { Button } from './ui/Button.jsx';
import { SITE, navHref } from '../constants/site.js';

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-white scroll-mt-24">
      <Container>
        <SectionHeader
          eyebrow="Contact Us"
          title="Get in Touch"
          description="Ready to optimize your logistics? Contact our team for a consultation."
        />

        <div className="grid lg:grid-cols-3 gap-8">
          <address className="lg:col-span-1 space-y-6 not-italic">
            {[
              {
                icon: MapPin,
                title: 'Headquarters',
                content: (
                  <>
                    1250 Logistics Boulevard
                    <br />
                    Suite 400
                    <br />
                    Denver, CO 80202
                  </>
                ),
              },
              {
                icon: Phone,
                title: 'Phone',
                content: (
                  <>
                    <a href={SITE.phoneHref} className="hover:text-primary-600 transition-colors">
                      {SITE.phone}
                    </a>
                    <br />
                    <span className="text-xs text-secondary-500">Toll-free: (800) 555-PEAK</span>
                  </>
                ),
              },
              {
                icon: Mail,
                title: 'Email',
                content: (
                  <>
                    <a href={`mailto:${SITE.email}`} className="hover:text-primary-600 transition-colors">
                      {SITE.email}
                    </a>
                    <br />
                    <a
                      href={`mailto:${SITE.quotesEmail}`}
                      className="text-xs text-secondary-500 hover:text-primary-600 transition-colors"
                    >
                      Quotes: {SITE.quotesEmail}
                    </a>
                  </>
                ),
              },
              {
                icon: Clock,
                title: 'Hours',
                content: (
                  <>
                    Monday-Friday: 6:00 AM - 8:00 PM
                    <br />
                    Saturday-Sunday: 8:00 AM - 5:00 PM
                    <br />
                    <span className="text-primary-600 font-semibold">24/7 Emergency Support</span>
                  </>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary-100">
                    <item.icon className="h-6 w-6 text-primary-600" aria-hidden="true" />
                  </div>
                </div>
                <div className="flex-1 text-sm">
                  <p className="font-semibold text-secondary-900">{item.title}</p>
                  <p className="mt-1 text-secondary-600">{item.content}</p>
                </div>
              </div>
            ))}
          </address>

          <div className="lg:col-span-2 bg-secondary-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-display font-bold text-secondary-900 mb-6">Get Your Free Quote</h3>
            <p className="text-secondary-600 mb-6">
              Not ready for a full conversation? Get started with our online quote form and one of our
              logistics experts will follow up with you within 24 hours.
            </p>

            <Button as={Link} to={navHref('quote')} size="lg" className="mb-8">
              Request a Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>

            <div className="bg-white rounded-xl p-6 border border-secondary-200">
              <h4 className="font-semibold text-secondary-900 mb-4">Why Choose NorthPeak?</h4>
              <ul className="space-y-3">
                {[
                  '99.8% on-time delivery rate',
                  '24/7 customer support',
                  'Real-time shipment tracking',
                  'Customized logistics solutions',
                  'Competitive, transparent pricing',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-secondary-600">
                    <svg className="w-5 h-5 text-success-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
