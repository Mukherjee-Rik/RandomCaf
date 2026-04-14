import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

const stages = [
  { emoji: '🫘', label: 'Green Beans', sub: 'Sourced from Ethiopia' },
  { emoji: '🔥', label: 'Roasting', sub: 'Dark roast perfection' },
  { emoji: '⚙️', label: 'Grinding', sub: 'Coarse to fine — your choice' },
  { emoji: '☕', label: 'Brewing', sub: 'Extracted at 93°C' },
  { emoji: '✨', label: 'Perfect Cup', sub: 'Your morning ritual' },
]

export default function HeroSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const smooth = useSpring(scrollYProgress, { stiffness: 60, damping: 20 })

  // Which stage we're on (0–4) based on scroll
  const stageIndex = useTransform(smooth, [0, 0.25, 0.5, 0.75, 1], [0, 1, 2, 3, 4])

  // Central emoji scale & rotation
  const scale = useTransform(smooth, [0, 0.5, 1], [1, 1.3, 1])
  const rotate = useTransform(smooth, [0, 1], [0, 360])

  // Background color shift
  const bgLight = useTransform(
    smooth,
    [0, 0.25, 0.5, 0.75, 1],
    ['#F5F0E8', '#EDE5D8', '#E5D5B8', '#D4B896', '#F5F0E8']
  )

  return (
    <section ref={containerRef} style={{ height: '500vh' }} className="relative" id="hero">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col items-center justify-center">
        <motion.div
          className="absolute inset-0 -z-10"
          style={{ backgroundColor: bgLight }}
        />

        {/* Radial glow */}
        <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] rounded-full bg-caramel/10 blur-3xl" />
        </div>

        {/* Stage labels — top */}
        <div className="flex gap-4 mb-10 flex-wrap justify-center px-4">
          {stages.map((s, i) => (
            <motion.div
              key={i}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center gap-1"
            >
              <div className="text-2xl">{s.emoji}</div>
              <div className="w-2 h-2 rounded-full bg-caramel/30 mx-auto" />
            </motion.div>
          ))}
        </div>

        {/* Central animated icon */}
        <motion.div
          style={{ scale, rotate }}
          className="text-[7rem] leading-none select-none mb-8 filter drop-shadow-2xl"
        >
          ☕
        </motion.div>

        {/* Dynamic stage text */}
        {stages.map((s, i) => (
          <motion.div
            key={i}
            style={{
              opacity: useTransform(smooth, [i * 0.2 - 0.05, i * 0.2 + 0.05, i * 0.2 + 0.15, i * 0.2 + 0.25],
                [0, 1, 1, 0])
            }}
            className="absolute text-center pointer-events-none"
          >
            <p className="font-serif text-5xl md:text-7xl font-bold text-espresso tracking-tight">
              {s.label}
            </p>
            <p className="font-sans text-lg text-caramel mt-2 tracking-widest uppercase">{s.sub}</p>
          </motion.div>
        ))}

        {/* Scroll hint */}
        <motion.div
          style={{ opacity: useTransform(smooth, [0, 0.1], [1, 0]) }}
          className="absolute bottom-10 flex flex-col items-center gap-2"
        >
          <span className="text-xs font-sans tracking-widest uppercase text-espresso/40">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-5 h-8 rounded-full border-2 border-espresso/30 flex justify-center pt-1.5"
          >
            <div className="w-1 h-1.5 rounded-full bg-caramel" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}