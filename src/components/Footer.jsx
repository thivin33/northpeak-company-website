import { Link } from 'react-router-dom';
import { Truck, MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { SITE, navHref } from '../constants/site.js';

const footerLinks = {
  services: [
    { name: 'Freight Shipping', hash: 'services' },
    { name: 'Warehousing', hash: 'services' },
    { name: 'Supply Chain', hash: 'services' },
    { name: 'Last Mile Delivery', hash: 'services' },
  ],
  company: [
    { name: 'About Us', hash: 'about' },
    { name: 'Case Studies', hash: 'case-studies' },
    { name: 'Testimonials', hash: 'testimonials' },
    { name: 'Careers', hash: 'contact' },
  ],
  support: [
    { name: 'FAQ', hash: 'faq' },
    { name: 'Contact', hash: 'contact' },
  ],
};

const socialLinks = [
  { label: 'Facebook', href: 'https://facebook.com', icon: Facebook },
  { label: 'Twitter', href: 'https://twitter.com', icon: Twitter },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  { label: 'Instagram', href: 'https://instagram.com', icon: Instagram },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-2">
            <Link
              to="/"
              className="flex items-center gap-3 mb-6 focus-visible:rounded-lg"
              aria-label={`${SITE.name} home`}
            >
              <div className="bg-primary-600 p-2.5 rounded-lg">
                <Truck className="w-7 h-7 text-white" aria-hidden="true" />
              </div>
              <div>
                <span className="block text-xl font-display font-bold">{SITE.shortName}</span>
                <span className="block text-xs text-secondary-400 font-medium tracking-wider uppercase">
                  {SITE.tagline}
                </span>
              </div>
            </Link>
            <p className="text-secondary-300 mb-6 leading-relaxed max-w-md">
              Delivering excellence across North America. Your trusted partner for freight,
              warehousing, and supply chain solutions.
            </p>
            <address className="space-y-3 text-secondary-300 not-italic">
              <p className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  {SITE.address.street}
                  <br />
                  {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
                </span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-400" aria-hidden="true" />
                <a href={SITE.phoneHref} className="hover:text-primary-400 transition-colors">
                  {SITE.phone}
                </a>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-400" aria-hidden="true" />
                <a href={`mailto:${SITE.email}`} className="hover:text-primary-400 transition-colors">
                  {SITE.email}
                </a>
              </p>
              <p className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary-400" aria-hidden="true" />
                <span>24/7 Support Available</span>
              </p>
            </address>
          </div>

          {[
            { title: 'Services', links: footerLinks.services },
            { title: 'Company', links: footerLinks.company },
            { title: 'Support', links: footerLinks.support },
          ].map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h3 className="text-lg font-semibold mb-6">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={navHref(link.hash)}
                      className="text-secondary-300 hover:text-primary-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="py-6 border-t border-secondary-700 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-secondary-400 text-sm">
            © {currentYear} {SITE.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-secondary-400 hover:text-primary-400 transition-colors"
                aria-label={`${SITE.shortName} on ${social.label}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <social.icon className="w-5 h-5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
