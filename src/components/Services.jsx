import { Link } from 'react-router-dom';
import { Container } from './ui/Container.jsx';
import { SectionHeader } from './ui/SectionHeader.jsx';
import { Button } from './ui/Button.jsx';
import { navHref } from '../constants/site.js';
import { services } from '../data/services.js';

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-white scroll-mt-24">
      <Container>
        <SectionHeader
          eyebrow="Our Services"
          title="Comprehensive Logistics Solutions"
          description="From freight shipping to warehousing, we offer a complete suite of logistics services designed to optimize your supply chain."
        />

        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 list-none p-0 m-0">
          {services.map((service) => (
            <li
              key={service.title}
              className="group bg-white rounded-xl border border-secondary-200 p-6 sm:p-8 hover:shadow-xl hover:border-primary-300 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors">
                <service.icon className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors" aria-hidden="true" />
              </div>

              <h3 className="text-xl font-semibold text-secondary-900 mb-3">{service.title}</h3>

              <p className="text-secondary-600 mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-secondary-700">
                    <svg className="w-4 h-4 text-primary-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <aside className="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-6 sm:p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">Need a Custom Solution?</h3>
              <p className="text-primary-100 mb-6">
                Every business has unique logistics needs. Our team will work with you to design a
                customized solution that fits your specific requirements and budget.
              </p>
              <Button as={Link} to={navHref('contact')} variant="secondary" size="md">
                Talk to an Expert
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </div>
            <div className="hidden md:grid grid-cols-2 gap-4">
              {[
                { value: '500+', label: 'Active Clients' },
                { value: '1M+', label: 'Shipments/Year' },
                { value: '98%', label: 'Client Retention' },
                { value: '50', label: 'States Served' },
              ].map((item) => (
                <div key={item.label} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <p className="text-3xl font-bold text-white">{item.value}</p>
                  <p className="text-sm text-primary-200">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </Container>
    </section>
  );
};

export default Services;
