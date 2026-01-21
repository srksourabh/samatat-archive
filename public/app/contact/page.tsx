'use client';

import { PageHeader } from '../components/PageHeader';
import { useState, FormEvent } from 'react';
import { submitContactForm, submitDonation } from '../../lib/firebase';

const contactTypes = [
  { id: 'join', label: 'Join as Activist/Organiser', icon: '👥' },
  { id: 'worker', label: 'Join as Theatre Worker', icon: '🎭' },
  { id: 'workshop', label: 'Participate in Workshops', icon: '📚' },
  { id: 'performance', label: 'Request for Performance', icon: '🎬' },
  { id: 'donate', label: 'Donate', icon: '❤️' },
];

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactPage() {
  const [selectedType, setSelectedType] = useState('join');
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [inquiryType, setInquiryType] = useState('join');
  const [message, setMessage] = useState('');

  // Donation fields
  const [donationAmount, setDonationAmount] = useState('');
  const [transactionId, setTransactionId] = useState('');

  const handleContactSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setErrorMessage('');

    try {
      const result = await submitContactForm({
        name,
        email,
        phone: phone || undefined,
        inquiryType,
        message,
      });

      setFormStatus('success');
      setSuccessMessage(result.message);
      // Reset form
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch (error) {
      setFormStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to submit. Please try again.');
    }
  };

  const handleDonationSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setErrorMessage('');

    try {
      const result = await submitDonation({
        name,
        email,
        phone: phone || undefined,
        amount: parseFloat(donationAmount),
        paymentMethod: 'bank_transfer',
        transactionId: transactionId || undefined,
        message: message || undefined,
      });

      setFormStatus('success');
      setSuccessMessage(result.message);
      // Reset form
      setName('');
      setEmail('');
      setPhone('');
      setDonationAmount('');
      setTransactionId('');
      setMessage('');
    } catch (error) {
      setFormStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to submit. Please try again.');
    }
  };

  return (
    <main>
      <PageHeader
        eyebrow="Get In Touch"
        title={{ en: 'Contact Us', bn: 'যোগাযোগ করুন', hi: 'संपर्क करें' }}
        description={{ en: 'Connect with Samatat Sanskriti for inquiries, collaborations, or to join our theatre community.', bn: 'অনুসন্ধান, সহযোগিতা বা আমাদের থিয়েটার সম্প্রদায়ে যোগদানের জন্য সমতট সংস্কৃতির সাথে যোগাযোগ করুন।', hi: 'पूछताछ, सहयोग, या हमारे थिएटर समुदाय में शामिल होने के लिए समतट संस्कृति से जुड़ें।' }}
        compact
      />

      {/* Contact Type Selection */}
      <section className="section section-charcoal" id="join">
        <div className="container">
          <h2 className="section-title mb-8 text-center">How Can We Help?</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {contactTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => {
                  setSelectedType(type.id);
                  setInquiryType(type.id);
                  setFormStatus('idle');
                }}
                className={`p-4 rounded-lg border-2 transition-all text-center ${
                  selectedType === type.id
                    ? 'border-gold bg-gold/10 text-white'
                    : 'border-white/20 text-light-gray hover:border-white/40'
                }`}
              >
                <span className="text-2xl block mb-2">{type.icon}</span>
                <span className="text-sm">{type.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section section-dark" id="workshop">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="section-title mb-6">
                {selectedType === 'donate' ? 'Donation Details' : 'Send Us a Message'}
              </h2>

              {/* Success Message */}
              {formStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-900/50 border border-green-500 rounded text-green-200">
                  {successMessage}
                </div>
              )}

              {/* Error Message */}
              {formStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-900/50 border border-red-500 rounded text-red-200">
                  {errorMessage}
                </div>
              )}

              {selectedType === 'donate' ? (
                // Donation Form
                <form className="space-y-4" onSubmit={handleDonationSubmit}>
                  <div>
                    <label className="block text-sm text-light-gray mb-2">Full Name *</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 bg-charcoal border border-white/20 rounded text-white focus:border-gold focus:outline-none"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-light-gray mb-2">Email *</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-charcoal border border-white/20 rounded text-white focus:border-gold focus:outline-none"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-light-gray mb-2">Phone</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 bg-charcoal border border-white/20 rounded text-white focus:border-gold focus:outline-none"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-light-gray mb-2">Donation Amount (₹) *</label>
                    <input
                      type="number"
                      value={donationAmount}
                      onChange={(e) => setDonationAmount(e.target.value)}
                      className="w-full px-4 py-3 bg-charcoal border border-white/20 rounded text-white focus:border-gold focus:outline-none"
                      placeholder="1000"
                      min="100"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-light-gray mb-2">Transaction ID (if already transferred)</label>
                    <input
                      type="text"
                      value={transactionId}
                      onChange={(e) => setTransactionId(e.target.value)}
                      className="w-full px-4 py-3 bg-charcoal border border-white/20 rounded text-white focus:border-gold focus:outline-none"
                      placeholder="UTR/Reference number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-light-gray mb-2">Message (Optional)</label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 bg-charcoal border border-white/20 rounded text-white focus:border-gold focus:outline-none"
                      placeholder="Any message for us..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formStatus === 'submitting' ? 'Submitting...' : 'Submit Donation Details'}
                  </button>
                </form>
              ) : (
                // Contact Form
                <form className="space-y-4" onSubmit={handleContactSubmit}>
                  <div>
                    <label className="block text-sm text-light-gray mb-2">Full Name *</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 bg-charcoal border border-white/20 rounded text-white focus:border-gold focus:outline-none"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-light-gray mb-2">Email *</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-charcoal border border-white/20 rounded text-white focus:border-gold focus:outline-none"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-light-gray mb-2">Phone</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 bg-charcoal border border-white/20 rounded text-white focus:border-gold focus:outline-none"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-light-gray mb-2">Inquiry Type *</label>
                    <select
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value)}
                      className="w-full px-4 py-3 bg-charcoal border border-white/20 rounded text-white focus:border-gold focus:outline-none"
                      required
                    >
                      <option value="join">Join as Activist/Organiser</option>
                      <option value="worker">Join as Theatre Worker</option>
                      <option value="workshop">Participate in Workshops</option>
                      <option value="performance">Request for Performance</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-light-gray mb-2">Message *</label>
                    <textarea
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 bg-charcoal border border-white/20 rounded text-white focus:border-gold focus:outline-none"
                      placeholder="Tell us how we can help..."
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>
                  <p className="text-sm text-gray text-center">We typically respond within 2-3 business days</p>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="section-title mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="card p-4">
                  <span className="text-2xl mb-2 block">📍</span>
                  <h3 className="text-white font-medium mb-1">Address</h3>
                  <p className="text-light-gray text-sm">209 Jai Krishna Street<br />Uttarpara, Hooghly District<br />West Bengal, India</p>
                </div>
                <div className="card p-4">
                  <span className="text-2xl mb-2 block">📧</span>
                  <h3 className="text-white font-medium mb-1">Email</h3>
                  <a href="mailto:samatatsanskritiuttarpara2000@gmail.com?cc=srksourabh@gmail.com" className="text-gold text-sm hover:text-gold-light break-all">
                    samatatsanskritiuttarpara2000@gmail.com
                  </a>
                </div>
                <div className="card p-4">
                  <span className="text-2xl mb-2 block">📱</span>
                  <h3 className="text-white font-medium mb-1">Phone / WhatsApp</h3>
                  <a href="tel:+919831051262" className="text-light-gray text-sm hover:text-gold">+91 98310 51262</a>
                  <p className="text-gray text-xs mt-1">Welcome always</p>
                </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="section section-charcoal" id="donate">
        <div className="container max-w-4xl text-center">
          <h2 className="section-title mb-4">Support Our Work</h2>
          <p className="section-description mx-auto mb-8">
            Your contribution helps us continue our mission of bringing meaningful theatre to the community.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Bank Transfer */}
            <div className="card p-8 text-left">
              <h3 className="text-white text-xl mb-4 flex items-center gap-2">
                <span>🏦</span> Bank Transfer
              </h3>
              <div className="text-light-gray text-sm space-y-2">
                <p><strong className="text-white">Account Name:</strong> Samatat Sanskriti</p>
                <p><strong className="text-white">Bank:</strong> State Bank of India</p>
                <p><strong className="text-white">Account Number:</strong> XXXX XXXX XXXX</p>
                <p><strong className="text-white">IFSC Code:</strong> SBIN000XXXX</p>
                <p><strong className="text-white">Branch:</strong> Uttarpara</p>
              </div>
              <p className="text-gray text-xs mt-4">After transfer, please click &quot;Donate&quot; above and fill the form with transaction details.</p>
            </div>

            {/* UPI */}
            <div className="card p-8 text-left">
              <h3 className="text-white text-xl mb-4 flex items-center gap-2">
                <span>📱</span> UPI Payment
              </h3>
              <div className="text-light-gray text-sm space-y-2">
                <p><strong className="text-white">UPI ID:</strong> samatat@sbi</p>
                <p className="text-gray text-xs mt-2">Scan QR code or use UPI ID</p>
                <div className="mt-4 bg-white p-4 rounded inline-block">
                  <div className="w-32 h-32 bg-gray-200 flex items-center justify-center text-gray-500 text-xs text-center">
                    QR Code<br/>Coming Soon
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-gray text-sm mt-8">
            For donation receipts and 80G certificates, please email us with transaction details.
          </p>
        </div>
      </section>
    </main>
  );
}
