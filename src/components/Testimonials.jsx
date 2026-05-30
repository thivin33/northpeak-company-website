import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { Container } from './ui/Container.jsx';
import { SectionHeader } from './ui/SectionHeader.jsx';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion.js';
import { testimonials, clientLogos } from '../data/testimonials.js';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const prefersReducedMotion = usePrefersReducedMotion();
  const current = testimonials[currentIndex];

  useEffect(() => {
    if (!isAutoPlaying || prefersReducedMotion) return;

    const timer = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [isAutoPlaying, prefersReducedMotion]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-secondary-50 scroll-mt-24">
      <Container>
        <SectionHeader
          eyebrow="Testimonials"
          title="Trusted by Industry Leaders"
          description="See what our clients say about partnering with NorthPeak Logistics."
        />

        <div
          className="relative"
          role="region"
          aria-roledescription="carousel"
          aria-label="Customer testimonials"
        >
          <article
            className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-12 max-w-4xl mx-auto"
            aria-live="polite"
            aria-atomic="true"
          >
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <div className="relative">
                  <img
                    src={current.image}
                    alt={`Photo of ${current.name}`}
                    width={96}
                    height={96}
                    loading="lazy"
                    decoding="async"
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-primary-100"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-primary-600 rounded-full p-2" aria-hidden="true">
                    <Quote className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-center md:justify-start gap-1 mb-4" aria-label={`${current.rating} out of 5 stars`}>
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-warning-400 fill-warning-400" aria-hidden="true" />
                  ))}
                </div>

                <blockquote className="text-lg md:text-xl text-secondary-700 leading-relaxed mb-6">
                  <p>&ldquo;{current.quote}&rdquo;</p>
                  <footer className="mt-6 not-italic">
                    <cite className="not-italic">
                      <span className="font-semibold text-secondary-900 block">{current.name}</span>
                      <span className="text-secondary-600">
                        {current.position}, {current.company}
                      </span>
                      <span className="text-sm text-primary-600 mt-2 font-medium block">
                        {current.shipmentVolume}
                      </span>
                    </cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </article>

          <div className="flex justify-center gap-3 mt-8">
            <button
              type="button"
              onClick={handlePrev}
              className="p-2 sm:p-3 hover:bg-secondary-100 text-secondary-700 rounded-lg transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="p-2 sm:p-3 hover:bg-secondary-100 text-secondary-700 rounded-lg transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" aria-hidden="true" />
            </button>
          </div>

          <div className="flex justify-center items-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className={`transition-all ${
                  index === currentIndex
                    ? 'bg-primary-600 rounded-full w-3 h-3'
                    : 'bg-secondary-300 rounded-full w-2 h-2 hover:bg-secondary-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
                aria-current={index === currentIndex}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-secondary-600 mb-8">Trusted by leading companies</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
            {clientLogos.map((logo) => (
              <div key={logo} className="text-gray-400 font-semibold">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
