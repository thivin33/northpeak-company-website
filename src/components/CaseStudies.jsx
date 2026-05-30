import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from './ui/Container.jsx';
import { SectionHeader } from './ui/SectionHeader.jsx';
import { Button } from './ui/Button.jsx';
import { SITE, navHref } from '../constants/site.js';
import { caseStudies } from '../data/caseStudies.js';

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-20 md:py-28 bg-white scroll-mt-24">
      <Container>
        <SectionHeader
          eyebrow="Success Stories"
          title="Real Results for Real Businesses"
          description="Discover how NorthPeak Logistics has helped companies optimize their supply chains and achieve measurable results."
        />

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <article
              key={study.id}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <figure className={`relative m-0 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={study.image}
                    alt={`${study.client}: ${study.title}`}
                    width={800}
                    height={600}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-56 sm:h-72 md:h-96 object-cover"
                  />
                </div>
                <figcaption className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-primary-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl shadow-lg hidden sm:block">
                  <p className="text-sm font-medium text-primary-200">Industry</p>
                  <p className="font-bold">{study.industry}</p>
                </figcaption>
              </figure>

              <div className={`lg:px-4 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <p className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-4 py-1 rounded-full mb-4">
                  {study.client}
                </p>

                <h3 className="text-2xl md:text-3xl font-display font-bold text-secondary-900 mb-4 text-balance">
                  {study.title}
                </h3>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-2">The Challenge</h4>
                    <p className="text-secondary-600">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-2">Our Solution</h4>
                    <p className="text-secondary-600">{study.solution}</p>
                  </div>
                </div>

                <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6 list-none p-0 m-0">
                  {study.results.map((result) => (
                    <li key={result.label} className="text-center p-3 sm:p-4 bg-secondary-50 rounded-lg">
                      <result.icon className="w-5 h-5 text-primary-600 mx-auto mb-2" aria-hidden="true" />
                      <p className="text-lg sm:text-xl md:text-2xl font-bold text-secondary-900">{result.metric}</p>
                      <p className="text-xs text-secondary-600">{result.label}</p>
                    </li>
                  ))}
                </ul>

                <Button as={Link} to={navHref('contact')} variant="text" size="md" className="!text-primary-600 hover:!text-primary-700 gap-1 px-0 py-0 shadow-none hover:bg-transparent focus-visible:outline-offset-2">
                  Get Similar Results
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        <aside className="mt-16 bg-gradient-to-r from-secondary-900 to-secondary-800 rounded-2xl p-6 sm:p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 text-balance">
            Ready to Transform Your Logistics?
          </h3>
          <p className="text-secondary-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies that have optimized their supply chain with NorthPeak.
            Let's discuss how we can achieve similar results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as={Link} to={navHref('quote')} size="lg">
              Request a Quote
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Button>
            <Button as="a" href={SITE.phoneHref} variant="secondary" size="lg">
              Call Us Today
            </Button>
          </div>
        </aside>
      </Container>
    </section>
  );
};

export default CaseStudies;
