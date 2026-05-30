import { ArrowRight, Shield, Clock, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SITE, navHref } from '../constants/site.js';
import { Button } from './ui/Button.jsx';
import { Container } from './ui/Container.jsx';

const HERO_IMAGE =
  'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1920';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900 overflow-hidden">
      <img
        src={HERO_IMAGE}
        alt=""
        width={1920}
        height={1080}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/95 to-secondary-900/70" aria-hidden="true" />

      <Container className="relative py-20 sm:py-24 md:py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div className="text-white">
            <p className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 text-sm font-medium">
              <span className="w-2 h-2 bg-success-400 rounded-full motion-safe:animate-pulse" aria-hidden="true" />
              Trusted by 500+ Companies
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 text-balance">
              Delivering Excellence
              <span className="block text-primary-400">Across Every Mile</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-secondary-300 mb-8 leading-relaxed max-w-xl">
              Premium freight, warehousing, and supply chain solutions tailored to your business.
              From first-mile to last-mile, we ensure your cargo arrives safely and on time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                as={Link}
                to={navHref('quote')}
                className="group"
                size="lg"
              >
                Get Your Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform motion-reduce:transform-none" aria-hidden="true" />
              </Button>
              <Button as="a" href={SITE.phoneHref} variant="secondary" size="lg">
                Call: {SITE.phone}
              </Button>
            </div>

            <dl className="grid grid-cols-3 gap-4 sm:gap-6">
              {[
                { icon: Shield, value: '99.8%', label: 'On-Time Delivery' },
                { icon: Clock, value: '24/7', label: 'Support Available' },
                { icon: Globe, value: '50+', label: 'States Covered' },
              ].map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <stat.icon className="w-5 h-5 text-primary-400 mx-auto sm:mx-0 mb-2" aria-hidden="true" />
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-2xl md:text-3xl font-bold">{stat.value}</dd>
                  <dd className="text-sm text-secondary-400">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="hidden lg:block relative" aria-hidden="true">
            <div className="absolute inset-0 bg-primary-500/20 rounded-3xl transform rotate-3" />
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform -rotate-1 hover:rotate-0 transition-transform duration-300 motion-reduce:transform-none">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-error-500" />
                <div className="w-3 h-3 rounded-full bg-warning-500" />
                <div className="w-3 h-3 rounded-full bg-success-500" />
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 p-4 bg-success-50 rounded-xl">
                  <div className="bg-success-500 text-white p-3 rounded-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-secondary-900">Shipment Delivered</p>
                    <p className="text-sm text-secondary-500">Order #78432 - Denver to Chicago</p>
                  </div>
                </li>
                <li className="flex items-center gap-4 p-4 bg-primary-50 rounded-xl">
                  <div className="bg-primary-500 text-white p-3 rounded-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-secondary-900">In Transit</p>
                    <p className="text-sm text-secondary-500">Order #78431 - Dallas to Houston</p>
                  </div>
                </li>
                <li className="flex items-center gap-4 p-4 bg-warning-50 rounded-xl">
                  <div className="bg-warning-500 text-white p-3 rounded-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-secondary-900">Processing</p>
                    <p className="text-sm text-secondary-500">Order #78430 - Los Angeles to Phoenix</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
