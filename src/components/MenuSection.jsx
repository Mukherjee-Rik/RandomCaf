import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const categories = ['All', 'Espresso', 'Filter', 'Cold Brew', 'Specialty', 'Food']

const items = [
  // Coffee
  { name: 'S22 Signature Espresso', cat: 'Espresso', price: '₹160', desc: 'Bold, rich single-origin shot with hazelnut notes', badge: 'Signature', image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&h=300&fit=crop' },
  { name: 'Pour Over', cat: 'Filter', price: '₹220', desc: 'Slow-drip, floral aroma, medium roast', badge: 'Single Origin', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop' },
  { name: 'Cold Brew', cat: 'Cold Brew', price: '₹250', desc: 'Smooth, low-acid, steeped 16 hours', badge: null, image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400&h=300&fit=crop' },
  { name: 'Flat White', cat: 'Espresso', price: '₹200', desc: 'Double ristretto, silky microfoam', badge: null, image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop' },
  { name: 'Salted Caramel Latte', cat: 'Specialty', price: '₹280', desc: 'House-made caramel, sea salt, oat milk option', badge: 'Chef Special', image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=400&h=300&fit=crop' },
  { name: 'Nitro Cold Brew', cat: 'Cold Brew', price: '₹320', desc: 'Nitrogen-infused, creamy head, less acidic', badge: 'New', image: 'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  // Food
  { name: 'Croissant (Butter)', cat: 'Food', price: '₹120', desc: 'Flaky, layered, baked fresh every morning', badge: null, image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=300&fit=crop' },
  { name: 'Almond Croissant', cat: 'Food', price: '₹160', desc: 'Stuffed with almond cream, sliced almonds', badge: 'Bestseller', image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=400&h=300&fit=crop' },
  { name: 'Belgian Waffle', cat: 'Food', price: '₹220', desc: 'Served with maple syrup & whipped cream', badge: null, image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=400&h=300&fit=crop' },
]

export default function MenuSection() {
  const [active, setActive] = useState('All')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  const filtered = active === 'All' ? items : items.filter(i => i.cat === active)

  return (
      <section id="menu" ref={ref} className="scroll-mt-20 py-28 px-6 bg-steam">      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-caramel mb-3">Our Menu</p>
          <h2 className="section-title">The Craft</h2>
          <div className="gold-line" />
        </motion.div>

        {/* Category filter */}
        <div className="flex gap-3 justify-center flex-wrap mb-10">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2 rounded-full text-sm font-sans tracking-wide border transition-all duration-200 ${
                active === c
                  ? 'bg-caramel text-cream border-caramel'
                  : 'bg-transparent text-espresso/60 border-espresso/20 hover:border-caramel hover:text-caramel'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, i) => (
            <motion.div
              key={item.name}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="bg-cream rounded-2xl overflow-hidden border border-latte/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-serif text-lg font-bold text-espresso group-hover:text-caramel transition-colors">{item.name}</h3>
                  {item.badge && (
                    <span className="text-xs px-2.5 py-1 rounded-full bg-caramel/10 text-caramel font-sans">{item.badge}</span>
                  )}
                </div>
                <p className="font-sans text-sm text-espresso/60 leading-relaxed mb-4">{item.desc}</p>
                <div className="flex justify-between items-center">
                  <span className="font-serif text-xl font-bold text-caramel">{item.price}</span>
                  <button className="text-xs font-sans tracking-widest uppercase text-espresso/40 hover:text-caramel transition-colors">
                    Add →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}