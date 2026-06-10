/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Privacy } from './components/Privacy';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CodeOfEthics } from './components/CodeOfEthics';
import { Compliance } from './components/Compliance';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export type View = 'home' | 'services' | 'privacy' | 'ethics' | 'compliance';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('home');

  const handleNavigate = (view: View) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar currentView={currentView} onNavigate={handleNavigate} />
      
      <main className="flex-grow">
        {currentView === 'home' && (
          <>
            <Hero onNavigate={handleNavigate} />
            <Services />
            <Contact />
          </>
        )}
        
        {currentView === 'services' && (
          <>
            <div className="pt-16 pb-8 bg-white border-b border-slate-200 text-center">
              <span className="text-blue-600 font-bold uppercase tracking-[0.2em] mb-4 text-xs block">O que fazemos</span>
              <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight">Serviços</h1>
            </div>
            <Services />
            <Contact />
          </>
        )}
        
        {currentView === 'privacy' && (
          <>
            <div className="pt-16 pb-8 bg-white border-b border-slate-200 text-center">
              <span className="text-blue-600 font-bold uppercase tracking-[0.2em] mb-4 text-xs block">Termos</span>
              <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight">Privacidade</h1>
            </div>
            <Privacy />
          </>
        )}

        {currentView === 'ethics' && (
          <>
            <div className="pt-16 pb-8 bg-white border-b border-slate-200 text-center px-4">
              <span className="text-blue-600 font-bold uppercase tracking-[0.2em] mb-4 text-xs block">Documento</span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">Código de Ética e Conduta</h1>
            </div>
            <CodeOfEthics />
          </>
        )}

        {currentView === 'compliance' && (
          <>
            <div className="pt-16 pb-8 bg-white border-b border-slate-200 text-center px-4">
              <span className="text-blue-600 font-bold uppercase tracking-[0.2em] mb-4 text-xs block">Programa</span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">Integridade e Compliance</h1>
            </div>
            <Compliance />
          </>
        )}
      </main>
      
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}
