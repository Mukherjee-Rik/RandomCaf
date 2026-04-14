import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import StorySection from './components/StorySection'
import MenuSection from './components/MenuSection'
import FeaturesSection from './components/FeaturesSection'
import GallerySection from './components/GallerySection'
import TestimonialsSection from './components/TestimonialsSection'
import BookingSection from './components/BookingSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <StorySection />
      <MenuSection />
      <FeaturesSection />
      <GallerySection />
      <TestimonialsSection />
      <BookingSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
