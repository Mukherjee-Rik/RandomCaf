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
              src="https://maps.app.goo.gl/k6xmurq2fKJJzKGz7"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
