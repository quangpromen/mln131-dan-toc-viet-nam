import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PolicySection from './components/PolicySection';
import AchievementSection from './components/AchievementSection';

function App() {
  return (
    <div className="relative min-h-screen bg-[#07111F]">
      <Header />
      <HeroSection />
      <PolicySection />
      <AchievementSection />
    </div>
  );
}

export default App;
