export const SITE = {
  name: 'NorthPeak Logistics',
  shortName: 'NorthPeak',
  tagline: 'Logistics',
  url: 'https://northpeaklogistics.com',
  phone: '(555) 123-4567',
  phoneHref: 'tel:+15551234567',
  email: 'info@northpeaklogistics.com',
  quotesEmail: 'quotes@northpeaklogistics.com',
  address: {
    street: '1250 Logistics Boulevard, Suite 400',
    city: 'Denver',
    state: 'CO',
    zip: '80202',
    full: '1250 Logistics Boulevard, Suite 400, Denver, CO 80202',
  },
};

export const NAV_LINKS = [
  { name: 'Home', path: '/', hash: undefined },
  { name: 'Services', path: '/', hash: 'services' },
  { name: 'About', path: '/', hash: 'about' },
  { name: 'Case Studies', path: '/', hash: 'case-studies' },
  { name: 'Testimonials', path: '/', hash: 'testimonials' },
  { name: 'FAQ', path: '/', hash: 'faq' },
  { name: 'Contact', path: '/', hash: 'contact' },
];

export function navHref(hash) {
  return hash ? `/#${hash}` : '/';
}
