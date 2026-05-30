import { Link } from 'react-router-dom';
import { Container } from './ui/Container.jsx';
import { SectionHeader } from './ui/SectionHeader.jsx';
import { Button } from './ui/Button.jsx';
import { SITE, navHref } from '../constants/site.js';
import { whyChooseFeatures } from '../data/whyChooseUs.js';

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-20 md:py-28 bg-secondary-50 scroll-mt-24">
      <Container>
        <SectionHeader
          eyebrow="Why Choose Us"
          title="The NorthPeak Difference"
          description="We do not just move freight. We build partnerships that drive your business forward."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {whyChooseFeatures.map((feature) => (
            <article
              key={feature.title}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow border border-secondary-100"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-primary-600" aria-hidden="true" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-secondary-900 mb-3">{feature.title}</h3>
                  <p className="text-secondary-600 mb-4 leading-relaxed">{feature.description}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-primary-600">{feature.stat}</span>
                    <span className="text-sm text-secondary-500">{feature.statLabel}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-secondary-100">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-secondary-900 mb-4">
                Ready to Experience the Difference?
              </h3>
              <p className="text-secondary-600 mb-6 leading-relaxed">
                Join hundreds of businesses that have transformed their logistics with NorthPeak.
                Our team is ready to create a customized solution that fits your unique needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button as={Link} to={navHref('quote')} size="md">
                  Get Your Free Quote
                </Button>
                <Button as="a" href={SITE.phoneHref} variant="ghost" size="md">
                  Call {SITE.phone}
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '15+', label: 'Years Experience' },
                { value: '1M+', label: 'Shipments/Year' },
                { value: '50', label: 'States Covered' },
                { value: '98%', label: 'Client Retention' },
              ].map((item) => (
                <div key={item.label} className="bg-secondary-50 rounded-lg p-6 text-center">
                  <p className="text-4xl font-bold text-primary-600">{item.value}</p>
                  <p className="text-sm text-secondary-600 mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
