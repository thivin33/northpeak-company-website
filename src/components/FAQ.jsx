import { useState, useId } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Container } from './ui/Container.jsx';
import { SectionHeader } from './ui/SectionHeader.jsx';
import { SITE } from '../constants/site.js';
import { faqCategories } from '../data/faq.js';

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});
  const baseId = useId();

  const toggleItem = (key) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-secondary-50 scroll-mt-24">
      <Container className="max-w-4xl">
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Find answers to common questions about our logistics services."
        />

        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <section key={category.category} className="bg-white rounded-xl shadow-md overflow-hidden">
              <h3 className="bg-secondary-900 text-white px-6 py-4 font-semibold text-lg">
                {category.category}
              </h3>
              <div>
                {category.questions.map((item, questionIndex) => {
                  const itemKey = `${categoryIndex}-${questionIndex}`;
                  const isOpen = Boolean(openItems[itemKey]);
                  const panelId = `${baseId}-${itemKey}`;
                  const buttonId = `${panelId}-button`;

                  return (
                    <div key={item.question} className="border-t border-secondary-100 first:border-t-0">
                      <h4 className="m-0">
                        <button
                          id={buttonId}
                          type="button"
                          onClick={() => toggleItem(itemKey)}
                          className="w-full px-6 py-5 flex items-start justify-between gap-4 text-left hover:bg-secondary-50 transition-colors"
                          aria-expanded={isOpen}
                          aria-controls={panelId}
                        >
                          <span className="font-medium text-secondary-900 pr-4">{item.question}</span>
                          <span className="flex-shrink-0 mt-1" aria-hidden="true">
                            {isOpen ? (
                              <Minus className="w-5 h-5 text-primary-600" />
                            ) : (
                              <Plus className="w-5 h-5 text-secondary-400" />
                            )}
                          </span>
                        </button>
                      </h4>
                      <div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        hidden={!isOpen}
                        className="px-6 pb-5 text-secondary-600 leading-relaxed"
                      >
                        {item.answer}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-secondary-600 mb-4">Still have questions? We are here to help.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Call: {SITE.phone}
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-secondary-50 border border-secondary-300 text-secondary-700 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
