import { Award } from 'lucide-react';
import { Container } from './ui/Container.jsx';
import { aboutStats, coreValues } from '../data/about.js';

const ABOUT_IMAGE =
  'https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&w=800';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white scroll-mt-24">
      <Container>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center mb-20">
          <div>
            <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider">About Us</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-6 text-balance">
              Your Trusted Logistics Partner Since 2009
            </h2>
            <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
              NorthPeak Logistics was founded with a simple mission: to transform the logistics
              industry through reliability, transparency, and innovation. What started as a regional
              carrier has grown into a full-service logistics provider trusted by businesses across
              North America.
            </p>
            <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
              We combine cutting-edge technology with old-school customer service. Our advanced
              tracking systems provide real-time visibility, while our dedicated account managers
              ensure personalized attention for every client.
            </p>
            <p className="text-lg text-secondary-600 leading-relaxed">
              From small businesses shipping occasional pallets to enterprise companies managing
              complex supply chains, we scale our services to meet your needs. Our team of 200+
              logistics professionals works around the clock to keep your cargo moving.
            </p>
          </div>

          <figure className="relative m-0">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={ABOUT_IMAGE}
                alt="NorthPeak Logistics warehouse and freight operations team at work"
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
                className="w-full h-64 sm:h-80 md:h-96 object-cover"
              />
            </div>
            <figcaption className="absolute -bottom-6 -left-4 sm:-left-8 bg-white rounded-xl shadow-xl p-4 sm:p-6 hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="bg-primary-100 rounded-lg p-3">
                  <Award className="w-8 h-8 text-primary-600" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-secondary-900">A+</p>
                  <p className="text-sm text-secondary-600">BBB Rating</p>
                </div>
              </div>
            </figcaption>
          </figure>
        </div>

        <dl className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-20">
          {aboutStats.map((stat) => (
            <div key={stat.label} className="text-center p-4 sm:p-6 bg-secondary-50 rounded-xl">
              <stat.icon className="w-8 h-8 text-primary-600 mx-auto mb-3" aria-hidden="true" />
              <dt className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-900">{stat.value}</dt>
              <dd className="text-sm text-secondary-600 mt-1">{stat.label}</dd>
            </div>
          ))}
        </dl>

        <div className="bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900 rounded-2xl p-6 sm:p-8 md:p-12">
          <header className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">Our Core Values</h3>
            <p className="text-secondary-300 max-w-2xl mx-auto text-balance">
              These principles guide every decision we make and every shipment we handle.
            </p>
          </header>

          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 list-none p-0 m-0">
            {coreValues.map((value) => (
              <li
                key={value.title}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white hover:bg-white/15 transition-colors"
              >
                <value.icon className="w-10 h-10 text-primary-400 mb-4" aria-hidden="true" />
                <h4 className="font-semibold text-lg mb-2">{value.title}</h4>
                <p className="text-sm text-secondary-300 leading-relaxed">{value.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default About;
