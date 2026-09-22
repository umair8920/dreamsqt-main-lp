import { Routes, Route } from 'react-router-dom';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { MarqueeStrip } from './components/MarqueeStrip';
import { EventSection } from './components/EventSection';
import { EverythingSection } from './components/EverythingSection';
import { PainPointsSection } from './components/PainPointsSection';
import { SolutionSection } from './components/SolutionSection';
import { ProofBannerSection } from './components/ProofBannerSection';
import { FeatureCardsSection } from './components/FeatureCardsSection';
import { SuccessStoriesSection } from './components/SuccessStoriesSection';
import { FounderSection } from './components/FounderSection';
import { EcosystemSection } from './components/EcosystemSection';
import { ResourcesSection } from './components/ResourcesSection';
import { Footer } from './components/Footer';
import { CostCalculatorPage } from './pages/CostCalculatorPage';
import { DsClub } from './pages/DsClub';
import { EventPage } from './pages/Event';
import { ResourcesPage } from './pages/ResourcesPage';
import { ContactPage } from './pages/ContactPage';
import { BlogPage } from './pages/BlogPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { useScrollReveal } from './hooks/useScrollReveal';
import './index.css';

const HomePage = () => (
  <div>
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'relative', zIndex: 30 }}>
        <TopBar />
      </div>
      <Header />
      <HeroSection />
    </div>
    <MarqueeStrip />
    <EventSection />
    <EverythingSection />
    <PainPointsSection />
    <SolutionSection />
    <ProofBannerSection />
    <FeatureCardsSection />
    <SuccessStoriesSection />
    <FounderSection />
    <EcosystemSection />
    <ResourcesSection />
    <Footer />
  </div>
);

export default function App() {
  useScrollReveal();

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cost-calculator" element={<CostCalculatorPage />} />
      <Route path="/ds-club" element={<DsClub />} />
      <Route path="/event" element={<EventPage />} />
      <Route path="/resources" element={<ResourcesPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/blog/:slug" element={<BlogDetailPage />} />
      <Route path="/blog" element={<BlogPage />} />
    </Routes>
  );
}
