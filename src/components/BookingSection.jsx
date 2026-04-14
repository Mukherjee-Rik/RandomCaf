import { motion } from 'framer-motion';
import { useState } from 'react';

export default function BookingSection() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', phone: '', date: '', time: '', guests: '2' });

  const handleNext = () => {
    if (formData.name && formData.phone) setStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.date || !formData.time) return;

    // 1. Message for the hotel
    const hotelMessage = `🪑 New Table Booking:\nName: ${formData.name}\nPhone: ${formData.phone}\nDate: ${formData.date}\nTime: ${formData.time}\nGuests: ${formData.guests}`;
    
    // 2. Confirmation message for the customer
    const customerMessage = `✅ Table confirmed!\n\n${formData.name}, you have a table for ${formData.guests} on ${formData.date} at ${formData.time}.\nWe look forward to serving you at Midnight Roast. ☕`;

    // Hotel's WhatsApp number (replace with your actual number)
    const hotelWhatsApp = '919903085026';
    
    // Open hotel message
    window.open(`https://wa.me/${hotelWhatsApp}?text=${encodeURIComponent(hotelMessage)}`, '_blank');
    
    // Open customer confirmation message (using the phone number from the form)
    // Remove any non‑digits and ensure it has country code (assuming Indian numbers)
    let customerPhone = formData.phone.replace(/\D/g, '');
    if (!customerPhone.startsWith('91') && customerPhone.length === 10) {
      customerPhone = '91' + customerPhone;
    }
    window.open(`https://wa.me/${customerPhone}?text=${encodeURIComponent(customerMessage)}`, '_blank');
  };

  return (
    <section id="book" className="py-28 px-6 bg-espresso">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-caramel mb-3">Reserve Your Spot</p>
          <h2 className="section-title" style={{ color: '#FAF6F0' }}>Book a Table</h2>
          <div className="gold-line mx-auto" />
          <p className="font-sans text-latte/70 mt-4 max-w-md mx-auto">
            We'll be ready for you — just fill in your details
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-cream rounded-2xl p-6 md:p-10 shadow-xl"
        >
          {step === 1 && (
            <div>
              <h3 className="font-serif text-2xl text-espresso mb-6">Your Details</h3>
              <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-5 py-3 mb-4 border border-latte/40 rounded-xl font-sans text-espresso placeholder:text-latte/50 focus:outline-none focus:border-caramel transition-colors"
              />
              <input
                type="tel"
                placeholder="Phone Number (with country code, e.g., 91XXXXXXXXXX)"
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-5 py-3 mb-6 border border-latte/40 rounded-xl font-sans text-espresso placeholder:text-latte/50 focus:outline-none focus:border-caramel transition-colors"
              />
              <button
                onClick={handleNext}
                className="w-full bg-caramel text-cream py-3 rounded-xl font-sans tracking-widest uppercase text-sm hover:bg-gold transition-colors duration-300"
              >
                Next →
              </button>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 className="font-serif text-2xl text-espresso mb-6">Select Time</h3>
              <input
                type="date"
                value={formData.date}
                onChange={e => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-5 py-3 mb-4 border border-latte/40 rounded-xl font-sans text-espresso focus:outline-none focus:border-caramel transition-colors"
              />
              <input
                type="time"
                value={formData.time}
                onChange={e => setFormData({ ...formData, time: e.target.value })}
                className="w-full px-5 py-3 mb-4 border border-latte/40 rounded-xl font-sans text-espresso focus:outline-none focus:border-caramel transition-colors"
              />
              <select
                value={formData.guests}
                onChange={e => setFormData({ ...formData, guests: e.target.value })}
                className="w-full px-5 py-3 mb-6 border border-latte/40 rounded-xl font-sans text-espresso focus:outline-none focus:border-caramel transition-colors bg-white"
              >
                {[1, 2, 3, 4, 5, 6].map(n => (
                  <option key={n} value={n}>{n} Guest{n > 1 ? 's' : ''}</option>
                ))}
              </select>
              <button
                onClick={handleSubmit}
                className="w-full bg-caramel text-cream py-3 rounded-xl font-sans tracking-widest uppercase text-sm hover:bg-gold transition-colors duration-300"
              >
                Confirm →
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}