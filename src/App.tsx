import { useState } from 'react';
import { Layout } from './components/Layout';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { WhatCanIdo } from './components/sections/WhatCanIdo/WhatCanIdo';
import { Skills } from './components/sections/Skills';
import { OpenSource } from './components/sections/OpenSource';
import { Contact } from './components/sections/Contact';
import { LanguageContext, Language } from './translations';

function App() {
  const [language, setLanguage] = useState<Language>('ca');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <Layout>
        <Hero />
        <About />
        <WhatCanIdo />
        <Skills />
        <OpenSource />
        <Contact />
      </Layout>
    </LanguageContext.Provider>
  );
}

export default App;