import { SITE } from '../../constants/site.js';
import { faqCategories } from '../../data/faq.js';

const socialProfiles = [
  'https://facebook.com',
  'https://twitter.com',
  'https://linkedin.com',
  'https://instagram.com',
];

const organizationSchema = {
  '@type': 'Organization',
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/vite.svg`,
  email: SITE.email,
  telephone: SITE.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.state,
    postalCode: SITE.address.zip,
    addressCountry: 'US',
  },
  sameAs: socialProfiles,
};

const localBusinessSchema = {
  '@type': 'LocalBusiness',
  name: SITE.name,
  image: 'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1200',
  '@id': SITE.url,
  url: SITE.url,
  telephone: SITE.phone,
  priceRange: '$$',
  address: organizationSchema.address,
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: SITE.phoneHref.replace('tel:', ''),
      contactType: 'customer support',
      areaServed: 'US',
      availableLanguage: ['English'],
    },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '06:00',
      closes: '20:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday', 'Sunday'],
      opens: '08:00',
      closes: '17:00',
    },
  ],
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: faqCategories.flatMap((category) =>
    category.questions.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    }))
  ),
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [organizationSchema, localBusinessSchema, faqSchema],
};

const StructuredData = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
  />
);

export default StructuredData;
