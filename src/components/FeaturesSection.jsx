import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const features = [
  { icon: '☕', title: 'Refined Coffee', body: 'Every cup is a testament to meticulous sourcing and expert craftsmanship. From bean to barista, quality is never compromised.' },
  { icon: '🌱', title: 'Ethical Sourcing', body: 'We partner directly with farms that share our values, ensuring the finest beans reach your cup with transparency and care.' },
  { icon: '🎨', title: 'Creative Space', body: 'More than a cafe — a vibrant space for connection, creativity, and quiet contemplation. Your second home awaits.' },
  { icon: '✨', title: 'Crafted Precision', body: 'Each drink is prepared with passion and precision, turning everyday coffee breaks into memorable rituals.' },
]

export default function FeatureSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="features" ref={ref} className="scroll-mt-20 py-28 px-6 bg-roast text-cream">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-caramel mb-3">Why Us</p>
          <h2 className="section-title" style={{ color: '#FAF6F0' }}>The CTM Difference</h2>
          <div className="gold-line" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="text-center group"
            >
              <div className="text-5xl mb-5 group-hover:scale-110 transition-transform duration-300 inline-block">{f.icon}</div>
              <h3 className="font-serif text-xl font-bold text-cream mb-3">{f.title}</h3>
              <p className="font-sans text-sm text-latte/70 leading-relaxed">{f.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
