import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PolicySection from './components/PolicySection';
import AchievementSection from './components/AchievementSection';
import Section4Prejudice from './components/Section4Prejudice';
import Section5ScenarioQuiz from './components/Section5ScenarioQuiz';
import Section6CallToAction from './components/Section6CallToAction';

function App() {
  return (
    <div className="relative min-h-screen bg-[#07111F]">
      <Header />
      <HeroSection />
      <PolicySection />
      <AchievementSection />
      <Section4Prejudice />
      <Section5ScenarioQuiz />
      <Section6CallToAction />
    </div>
  );
}

export default App;
