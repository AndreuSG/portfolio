import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Contact } from './components/sections/Contact';
import { LanguageContext, Language } from './translations';

function App() {
  const [language, setLanguage] = useState<Language>('ca');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <Layout>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </Layout>
    </LanguageContext.Provider>
  );
}

export default App;