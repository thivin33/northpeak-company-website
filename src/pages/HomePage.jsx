import { lazy, Suspense, useEffect } from 'react';
import Hero from '../components/Hero.jsx';
import { useScrollToHash } from '../hooks/useScrollToHash.js';

const Services = lazy(() => import('../components/Services.jsx'));
const About = lazy(() => import('../components/About.jsx'));
const WhyChooseUs = lazy(() => import('../components/WhyChooseUs.jsx'));
const QuoteForm = lazy(() => import('../components/QuoteForm.jsx'));
const CaseStudies = lazy(() => import('../components/CaseStudies.jsx'));
const Testimonials = lazy(() => import('../components/Testimonials.jsx'));
const FAQ = lazy(() => import('../components/FAQ.jsx'));
const Contact = lazy(() => import('../components/Contact.jsx'));

const SectionFallback = () => (
  <div className="py-20 md:py-28" aria-hidden="true">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-48 bg-secondary-100 rounded-xl animate-pulse" />
  </div>
);

const LazySection = ({ children }) => (
  <Suspense fallback={<SectionFallback />}>{children}</Suspense>
);

const HomePage = () => {
  const scrollToHash = useScrollToHash();

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      requestAnimationFrame(() => scrollToHash(hash));
    }
  }, [scrollToHash]);

  return (
    <main id="main-content" tabIndex={-1}>
      <Hero />
      <LazySection>
        <Services />
      </LazySection>
      <LazySection>
        <About />
      </LazySection>
      <LazySection>
        <WhyChooseUs />
      </LazySection>
      <LazySection>
        <QuoteForm />
      </LazySection>
      <LazySection>
        <CaseStudies />
      </LazySection>
      <LazySection>
        <Testimonials />
      </LazySection>
      <LazySection>
        <FAQ />
      </LazySection>
      <LazySection>
        <Contact />
      </LazySection>
    </main>
  );
};

export default HomePage;
