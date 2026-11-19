import { LanguageProvider } from '@/hooks/useLanguage';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SEO } from '@/components/SEO';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Philosophy } from '@/components/Philosophy';
import { Menu } from '@/components/Menu';
import { OvenSection } from '@/components/OvenSection';
import { Gallery } from '@/components/Gallery';
import { Reviews } from '@/components/Reviews';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

function AppContent() {
  useScrollReveal();

  return (
    <>
      <SEO />
      <Header />
      <main>
        <Hero />
        <About />
        <Philosophy />
        <Menu />
        <OvenSection />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
