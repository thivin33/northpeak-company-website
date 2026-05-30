import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Container } from './ui/Container.jsx';
import { SITE } from '../constants/site.js';

const serviceTypes = [
  'Freight Shipping (FTL)',
  'Freight Shipping (LTL)',
  'Warehousing & Distribution',
  'Supply Chain Management',
  'Last Mile Delivery',
  'Specialized Transport',
  'Expedited Shipping',
  'Other',
];

const initialFormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  serviceType: '',
  pickupLocation: '',
  deliveryLocation: '',
  shipmentDetails: '',
  additionalInfo: '',
};

const QuoteForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s\-+()]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.serviceType) {
      newErrors.serviceType = 'Please select a service type';
    }

    if (!formData.pickupLocation.trim()) {
      newErrors.pickupLocation = 'Pickup location is required';
    }

    if (!formData.deliveryLocation.trim()) {
      newErrors.deliveryLocation = 'Delivery location is required';
    }

    if (!formData.shipmentDetails.trim()) {
      newErrors.shipmentDetails = 'Please describe your shipment';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData(initialFormData);

    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  if (isSuccess) {
    return (
      <section id="quote" className="py-20 md:py-28 bg-gradient-to-b from-white to-secondary-50 scroll-mt-24">
        <Container className="max-w-3xl text-center">
          <div
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 animate-fade-in"
            role="status"
            aria-live="polite"
          >
            <div className="w-20 h-20 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-success-600" />
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-secondary-900 mb-4">
              Quote Request Received!
            </h3>
            <p className="text-secondary-600 mb-6">
              Thank you for your interest in NorthPeak Logistics. Our team will review your request
              and get back to you within 24 hours with a customized quote.
            </p>
            <button
              type="button"
              onClick={() => setIsSuccess(false)}
              className="text-primary-600 hover:text-primary-700 font-semibold"
            >
              Submit Another Request
            </button>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section id="quote" className="py-20 md:py-28 bg-gradient-to-b from-white to-secondary-50 scroll-mt-24">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
              Get Started
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-secondary-900">
              Request Your Free Quote
            </h2>
            <p className="mt-4 text-lg text-secondary-600 leading-relaxed">
              Get a customized shipping quote in less than 24 hours. Our logistics experts will
              analyze your requirements and provide the most cost-effective solution.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-600 font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-900">Tell Us About Your Shipment</h4>
                  <p className="text-sm text-secondary-600 mt-1">
                    Fill out the form with your shipment details and requirements.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-600 font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-900">Get Your Custom Quote</h4>
                  <p className="text-sm text-secondary-600 mt-1">
                    Our team reviews your needs and prepares a detailed quote within 24 hours.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-600 font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-900">Start Shipping</h4>
                  <p className="text-sm text-secondary-600 mt-1">
                    Once approved, we'll handle everything from pickup to delivery.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 bg-primary-50 rounded-xl border border-primary-100">
              <p className="text-primary-900 font-semibold mb-2">Need immediate assistance?</p>
              <p className="text-primary-700 text-sm mb-4">
                Call our logistics experts 24/7 for urgent shipments.
              </p>
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700"
              >
                {SITE.phone}
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6" noValidate aria-label="Request a shipping quote">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.name ? 'border-error-500 focus:ring-error-500' : 'border-secondary-300 focus:ring-primary-500'
                    } focus:border-transparent focus:ring-2 transition-all outline-none`}
                    placeholder="John Smith"
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-sm text-error-600 flex items-center gap-1" role="alert">
                      <AlertCircle className="w-4 h-4" aria-hidden="true" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.email ? 'border-error-500 focus:ring-error-500' : 'border-secondary-300 focus:ring-primary-500'
                    } focus:border-transparent focus:ring-2 transition-all outline-none`}
                    placeholder="john@company.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-error-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.phone ? 'border-error-500 focus:ring-error-500' : 'border-secondary-300 focus:ring-primary-500'
                    } focus:border-transparent focus:ring-2 transition-all outline-none`}
                    placeholder="(555) 123-4567"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-error-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-secondary-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-secondary-300 focus:ring-primary-500 focus:border-transparent focus:ring-2 transition-all outline-none"
                    placeholder="Your Company Inc."
                  />
                </div>
              </div>

              <div>
                <label htmlFor="serviceType" className="block text-sm font-medium text-secondary-700 mb-2">
                  Service Type *
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.serviceType ? 'border-error-500 focus:ring-error-500' : 'border-secondary-300 focus:ring-primary-500'
                  } focus:border-transparent focus:ring-2 transition-all outline-none bg-white`}
                >
                  <option value="">Select a service</option>
                  {serviceTypes.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                {errors.serviceType && (
                  <p className="mt-1 text-sm text-error-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.serviceType}
                  </p>
                )}
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="pickupLocation" className="block text-sm font-medium text-secondary-700 mb-2">
                    Pickup Location *
                  </label>
                  <input
                    type="text"
                    id="pickupLocation"
                    name="pickupLocation"
                    value={formData.pickupLocation}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.pickupLocation ? 'border-error-500 focus:ring-error-500' : 'border-secondary-300 focus:ring-primary-500'
                    } focus:border-transparent focus:ring-2 transition-all outline-none`}
                    placeholder="City, State"
                  />
                  {errors.pickupLocation && (
                    <p className="mt-1 text-sm text-error-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.pickupLocation}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="deliveryLocation" className="block text-sm font-medium text-secondary-700 mb-2">
                    Delivery Location *
                  </label>
                  <input
                    type="text"
                    id="deliveryLocation"
                    name="deliveryLocation"
                    value={formData.deliveryLocation}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.deliveryLocation ? 'border-error-500 focus:ring-error-500' : 'border-secondary-300 focus:ring-primary-500'
                    } focus:border-transparent focus:ring-2 transition-all outline-none`}
                    placeholder="City, State"
                  />
                  {errors.deliveryLocation && (
                    <p className="mt-1 text-sm text-error-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.deliveryLocation}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="shipmentDetails" className="block text-sm font-medium text-secondary-700 mb-2">
                  Shipment Details *
                </label>
                <textarea
                  id="shipmentDetails"
                  name="shipmentDetails"
                  value={formData.shipmentDetails}
                  onChange={handleChange}
                  rows={3}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.shipmentDetails ? 'border-error-500 focus:ring-error-500' : 'border-secondary-300 focus:ring-primary-500'
                  } focus:border-transparent focus:ring-2 transition-all outline-none resize-none`}
                  placeholder="Describe your cargo: weight, dimensions, quantity, special requirements..."
                />
                {errors.shipmentDetails && (
                  <p className="mt-1 text-sm text-error-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.shipmentDetails}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="additionalInfo" className="block text-sm font-medium text-secondary-700 mb-2">
                  Additional Information
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  rows={2}
                  className="w-full px-4 py-3 rounded-lg border border-secondary-300 focus:ring-primary-500 focus:border-transparent focus:ring-2 transition-all outline-none resize-none"
                  placeholder="Any other details we should know..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:transform-none disabled:shadow-md flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Submit Quote Request
                  </>
                )}
              </button>

              <p className="text-sm text-secondary-500 text-center">
                We'll respond within 24 hours. Your information is secure and confidential.
              </p>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default QuoteForm;
