export default function Footer() {
  return (
    <footer className="bg-espresso border-t border-latte/10 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">☕</span>
          <span className="font-serif text-lg text-cream">S22 Cafe</span>
        </div>
        <p className="font-sans text-xs text-latte/30 tracking-wide">
          © 2024 S22 Cafe. Crafted with care.
        </p>
        <div className="flex gap-6">
          <a 
            href="https://www.instagram.com/s22_cafe_agartala?igsh=azVheHJzeHVrczBw" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-sans text-xs tracking-widest uppercase text-latte/30 hover:text-caramel transition-colors"
          >
            Instagram
          </a>
          <a 
            href="https://www.facebook.com/share/17KWYEuMzw/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-sans text-xs tracking-widest uppercase text-latte/30 hover:text-caramel transition-colors"
          >
            Facebook
          </a>
        </div>
      </div>
    </footer>
  )
}