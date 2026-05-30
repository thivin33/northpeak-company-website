import { useState, useEffect, useId } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Truck, Phone, Mail } from 'lucide-react';
import { NAV_LINKS, SITE, navHref } from '../constants/site.js';
import { useScrollToHash } from '../hooks/useScrollToHash.js';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuId = useId();
  const scrollToHash = useScrollToHash();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleNavClick = (hash) => {
    setIsMenuOpen(false);
    scrollToHash(hash);
  };

  return (
    <>
      <div className="bg-secondary-900 text-white py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href={SITE.phoneHref} className="flex items-center gap-2 hover:text-primary-300 transition-colors">
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>{SITE.phone}</span>
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-2 hover:text-primary-300 transition-colors"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              <span>{SITE.email}</span>
            </a>
          </div>
          <p className="text-secondary-300">24/7 Support Available</p>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
          <div className="flex justify-between items-center h-20">
            <Link
              to="/"
              className="flex items-center gap-3 group focus-visible:rounded-lg"
              aria-label={`${SITE.name} home`}
            >
              <div className="bg-primary-600 p-2.5 rounded-lg transform group-hover:scale-105 transition-transform">
                <Truck className="w-7 h-7 text-white" aria-hidden="true" />
              </div>
              <div>
                <span className="block text-xl font-display font-bold text-secondary-900">
                  {SITE.shortName}
                </span>
                <span className="block text-xs text-secondary-500 font-medium tracking-wider uppercase">
                  {SITE.tagline}
                </span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={navHref(link.hash)}
                  onClick={(e) => {
                    if (link.hash) {
                      e.preventDefault();
                      handleNavClick(link.hash);
                    }
                  }}
                  className="text-sm font-medium transition-colors relative py-2 text-secondary-700 hover:text-primary-600 focus-visible:rounded"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <Link
                to={navHref('quote')}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('quote');
                }}
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Get a Quote
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-secondary-100 transition-colors"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              aria-controls={menuId}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-secondary-700" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6 text-secondary-700" aria-hidden="true" />
              )}
            </button>
          </div>

          {isMenuOpen && (
            <div
              id={menuId}
              className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-secondary-200 animate-slide-down"
            >
              <div className="px-4 py-6 space-y-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    to={navHref(link.hash)}
                    onClick={(e) => {
                      if (link.hash) e.preventDefault();
                      handleNavClick(link.hash);
                    }}
                    className="block px-4 py-3 text-secondary-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors font-medium"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-secondary-200">
                  <Link
                    to={navHref('quote')}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('quote');
                    }}
                    className="block w-full bg-primary-600 hover:bg-primary-700 text-white text-center px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
