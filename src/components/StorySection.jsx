import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const milestones = [
  { year: '2023', text: 'S22 CAFE was founded with a vision: to brew more than just coffee — to create a space for genuine human connection.' },
  { year: '2024', text: 'Expanded our sourcing network, partnering directly with ethical farms to secure the world\'s finest beans.' },
  { year: '2025', text: 'Launched our signature craft menu, where every drink is prepared with passion and precision by expert baristas.' },
  { year: '2026', text: 'Became a beloved community hub — a second home for creativity, quiet contemplation, and shared moments.' },
]

function FadeUp({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export default function StorySection() {
  return (
      <section id="story" className="scroll-mt-20 py-28 px-6 bg-espresso text-cream">      <div className="max-w-5xl mx-auto">
        <FadeUp>
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-caramel mb-4 text-center">Our Story</p>
          <h2 className="section-title text-center text-cream mb-2">Rooted in Ritual</h2>
          <div className="gold-line" />
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="font-sans text-latte/80 text-center max-w-2xl mx-auto mt-6 text-lg leading-relaxed">
            At S22 CAFE, we believe exceptional coffee fosters genuine connection. Every cup is crafted with care, turning daily rituals into moments worth savoring.
          </p>
        </FadeUp>

        <div className="mt-20 relative">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-caramel/20 hidden md:block" />

          <div className="flex flex-col gap-14">
            {milestones.map((m, i) => (
              <FadeUp key={m.year} delay={i * 0.1}>
                <div className={`flex flex-col md:flex-row items-center gap-6 ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  <div className="md:w-1/2 text-center md:text-right" style={{ textAlign: i % 2 === 0 ? 'right' : 'left' }}>
                    <span className="font-serif text-5xl font-bold text-caramel">{m.year}</span>
                  </div>
                  <div className="w-5 h-5 rounded-full bg-caramel border-4 border-espresso shrink-0 z-10 hidden md:block" />
                  <div className="md:w-1/2">
                    <p className="font-sans text-latte/80 text-lg">{m.text}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}