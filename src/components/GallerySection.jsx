import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const galleryItems = [
  { 
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&h=600&fit=crop', 
    label: 'Morning Ritual', 
    size: 'col-span-2 row-span-2' 
  },
  { 
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&h=300&fit=crop', 
    label: 'Fresh Beans', 
    size: '' 
  },
  { 
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop', 
    label: 'Latte Art', 
    size: '' 
  },
  { 
    image: 'https://plus.unsplash.com/premium_photo-1664970900335-a7c99062bc51?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    label: 'Brewing', 
    size: '' 
  },
  { 
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop', 
    label: 'Pour Over', 
    size: '' 
  },
  { 
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=400&fit=crop', 
    label: 'Cozy Corner', 
    size: 'col-span-2' 
  },
]

export default function GallerySection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="gallery" ref={ref} className="scroll-mt-20 py-28 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-caramel mb-3">Gallery</p>
          <h2 className="section-title">Through the Lens</h2>
          <div className="gold-line" />
        </motion.div>

        <div className="grid grid-cols-3 grid-rows-3 gap-4 h-[600px]">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1 }}
              className={`${item.size} rounded-2xl overflow-hidden relative cursor-pointer group`}
            >
              <img
                src={item.image}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Dark overlay + label */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <span className="font-sans text-xs tracking-widest uppercase text-white/90 group-hover:text-caramel transition-colors bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm">
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}