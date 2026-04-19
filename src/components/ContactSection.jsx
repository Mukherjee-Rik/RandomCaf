import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function ContactSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="contact" ref={ref} className="scroll-mt-20 py-28 px-6 bg-cream text-espresso">

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left side – contact details */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-caramel mb-3">Get In Touch</p>
          <h2 className="section-title text-espresso mb-6">Visit Us</h2>
          <div className="space-y-4 font-sans text-espresso/70">
            <div>
              <p className="text-caramel text-xs tracking-widest uppercase mb-1">Address</p>
              <p> TG Rd, near Road Number 3, Ram Nagar, Agartala, Tripura 799002 </p>
            </div>
            <div>
              <p className="text-caramel text-xs tracking-widest uppercase mb-1">Hours</p>
              <p>Mon–Sat: 11am – 10pm<br />Sunday: 11am – 9pm</p>
            </div>
            <div>
              <p className="text-caramel text-xs tracking-widest uppercase mb-1">Phone</p>
              <p>+91 97747 95481</p>
            </div>
          </div>
        </motion.div>

        {/* Right side – embedded Google Map */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="w-full"
        >
          <div className="relative w-full pb-[75%] rounded-2xl overflow-hidden border border-latte/30 shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.480971922949!2d91.2675395744182!3d23.83704877861135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753f43c51cdf9b9%3A0xf5ab3e9ab6593f8a!2sCoffee%20Tea%20%26%20Me!5e0!3m2!1sen!2sin!4v1776612783037!5m2!1sen!2sin"
              className="absolute top-0 left-0 w-full h-full"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="S22 Cafe Location Map"
            />          
          </div>
        </motion.div>
      </div>
    </section>
  )
}
