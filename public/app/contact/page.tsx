'use client';

import { PageHeader } from '../components/PageHeader';
import { useState } from 'react';

const contactTypes = [
  { id: 'join', label: 'Join as Activist/Organiser', icon: '👥' },
  { id: 'worker', label: 'Join as Theatre Worker', icon: '🎭' },
  { id: 'workshop', label: 'Participate in Workshops', icon: '📚' },
  { id: 'performance', label: 'Request for Performance', icon: '🎬' },
  { id: 'donate', label: 'Donate', icon: '❤️' },
];

export default function ContactPage() {
  const [selectedType, setSelectedType] = useState('join');

  return (
    <main>
      <PageHeader
        eyebrow="Get In Touch"
        title={{ en: 'Contact Us', bn: 'যোগাযোগ করুন', hi: 'संपर्क करें' }}
        description={{ en: 'Connect with Samatat Sanskriti for inquiries, collaborations, or to join our theatre community.', bn: 'অনুসন্ধান, সহযোগিতা বা আমাদের থিয়েটার সম্প্রদায়ে যোগদানের জন্য সমতট সংস্কৃতির সাথে যোগাযোগ করুন।', hi: 'पूछताछ, सहयोग, या हमारे थिएटर समुदाय में शामिल होने के लिए समतट संस्कृति से जुड़ें।' }}
      />

      {/* Contact Type Selection */}
      <section className="section section-charcoal" id="join">
        <div className="container">
          <h2 className="section-title mb-8 text-center">How Can We Help?</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {contactTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
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
              <h2 className="section-title mb-6">Send Us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm text-light-gray mb-2">Full Name *</label>
                  <input type="text" className="w-full px-4 py-3 bg-charcoal border border-white/20 rounded text-white focus:border-gold focus:outline-none" placeholder="Your name" required />
                </div>
                <div>
                  <label className="block text-sm text-light-gray mb-2">Email *</label>
                  <input type="email" className="w-full px-4 py-3 bg-charcoal border border-white/20 rounded text-white focus:border-gold focus:outline-none" placeholder="your@email.com" required />
                </div>
                <div>
                  <label className="block text-sm text-light-gray mb-2">Phone</label>
                  <input type="tel" className="w-full px-4 py-3 bg-charcoal border border-white/20 rounded text-white focus:border-gold focus:outline-none" placeholder="+91 XXX XXX XXXX" />
                </div>
                <div>
                  <label className="block text-sm text-light-gray mb-2">Inquiry Type *</label>
                  <select className="w-full px-4 py-3 bg-charcoal border border-white/20 rounded text-white focus:border-gold focus:outline-none" required>
                    <option value="join">Join as Activist/Organiser</option>
                    <option value="worker">Join as Theatre Worker</option>
                    <option value="workshop">Participate in Workshops</option>
                    <option value="performance">Request for Performance</option>
                    <option value="donate">Donation Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-light-gray mb-2">Message *</label>
                  <textarea rows={5} className="w-full px-4 py-3 bg-charcoal border border-white/20 rounded text-white focus:border-gold focus:outline-none" placeholder="Tell us how we can help..." required></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-full">Send Message</button>
                <p className="text-sm text-gray text-center">We typically respond within 2-3 business days</p>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="section-title mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="card p-4">
                  <span className="text-2xl mb-2 block">📍</span>
                  <h3 className="text-white font-medium mb-1">Address</h3>
                  <p className="text-light-gray text-sm">Samatat Sanskriti, Uttarpara<br />Hooghly District<br />West Bengal, India</p>
                </div>
                <div className="card p-4">
                  <span className="text-2xl mb-2 block">📧</span>
                  <h3 className="text-white font-medium mb-1">Email</h3>
                  <p className="text-light-gray text-sm">contact@samatatuttarpara.org</p>
                </div>
                <div className="card p-4">
                  <span className="text-2xl mb-2 block">📱</span>
                  <h3 className="text-white font-medium mb-1">Phone / WhatsApp</h3>
                  <p className="text-light-gray text-sm">+91 XXX XXX XXXX</p>
                </div>
                <div className="card p-4">
                  <span className="text-2xl mb-2 block">🕐</span>
                  <h3 className="text-white font-medium mb-1">Office Hours</h3>
                  <p className="text-light-gray text-sm">Mon-Fri: 10AM - 6PM<br />Sat: 10AM - 2PM<br />Sun: Closed</p>
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
          <div className="card p-8 max-w-md mx-auto">
            <h3 className="text-white text-xl mb-4">Bank Transfer Details</h3>
            <div className="text-left text-light-gray text-sm space-y-2">
              <p><strong className="text-white">Account Name:</strong> Samatat Sanskriti</p>
              <p><strong className="text-white">Bank:</strong> [Bank Name]</p>
              <p><strong className="text-white">Account Number:</strong> [Account Number]</p>
              <p><strong className="text-white">IFSC Code:</strong> [IFSC Code]</p>
            </div>
            <p className="text-gray text-sm mt-4">For donation receipts, please email us with transaction details.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
