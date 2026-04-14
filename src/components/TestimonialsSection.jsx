import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const reviews = [
  { name: 'Priya S.', city: 'Agartala', quote: 'The Midnight Espresso is the only reason I wake up in the morning. Genuinely.', stars: 5 },
  { name: 'Arjun M.', city: 'Agartala', quote: 'I\'ve tried specialty coffee from around the world. This competes at the top level.', stars: 5 },
  { name: 'Leila K.', city: 'Agartala', quote: 'The pour over subscription changed my home coffee game forever. Worth every rupee.', stars: 5 },
]

export default function TestimonialsSection() {
  const [idx, setIdx] = useState(0)

  return (
    <section className="py-28 px-6 bg-steam">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-caramel mb-3">Testimonials</p>
        <h2 className="section-title mb-2">What They Say</h2>
        <div className="gold-line mb-14" />

        <div className="relative h-48">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <div className="text-caramel text-2xl mb-4">{'★'.repeat(reviews[idx].stars)}</div>
              <p className="font-serif text-xl md:text-2xl text-espresso italic mb-5 leading-relaxed">
                "{reviews[idx].quote}"
              </p>
              <p className="font-sans text-sm tracking-wide text-espresso/50">
                — {reviews[idx].name}, {reviews[idx].city}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                i === idx ? 'bg-caramel w-6' : 'bg-espresso/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}