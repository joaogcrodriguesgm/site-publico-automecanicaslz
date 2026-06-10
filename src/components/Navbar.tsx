import { Wrench } from "lucide-react";

export type View = 'home' | 'services' | 'privacy' | 'ethics' | 'compliance';

interface NavbarProps {
  currentView: View;
  onNavigate: (view: View) => void;
}

export function Navbar({ currentView, onNavigate }: NavbarProps) {
  const scrollToContact = () => {
    onNavigate('home');
    setTimeout(() => {
      document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <header className="h-auto min-h-[5rem] py-4 bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col md:flex-row justify-between items-center h-full gap-4">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shrink-0">
              <Wrench className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight uppercase text-blue-900 whitespace-nowrap">
              Auto Mecânica SLZ
            </span>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[11px] lg:text-xs font-semibold uppercase tracking-widest text-center">
            <button 
              onClick={() => onNavigate('home')} 
              className={`transition-colors whitespace-nowrap ${currentView === 'home' ? 'text-blue-600' : 'text-slate-500 hover:text-blue-600'}`}
            >
              Início
            </button>
            <button 
              onClick={() => onNavigate('services')} 
              className={`transition-colors whitespace-nowrap ${currentView === 'services' ? 'text-blue-600' : 'text-slate-500 hover:text-blue-600'}`}
            >
              Serviços
            </button>
            <button 
              onClick={() => onNavigate('privacy')} 
              className={`transition-colors whitespace-nowrap ${currentView === 'privacy' ? 'text-blue-600' : 'text-slate-500 hover:text-blue-600'}`}
            >
              Privacidade
            </button>
            <button 
              onClick={() => onNavigate('ethics')} 
              className={`transition-colors whitespace-nowrap ${currentView === 'ethics' ? 'text-blue-600' : 'text-slate-500 hover:text-blue-600'}`}
            >
              Código de Ética e Conduta
            </button>
            <button 
              onClick={() => onNavigate('compliance')} 
              className={`transition-colors whitespace-nowrap ${currentView === 'compliance' ? 'text-blue-600' : 'text-slate-500 hover:text-blue-600'}`}
            >
              Programa de Integridade e Compliance
            </button>
          </nav>
          
          <div className="flex items-center gap-4 shrink-0">
            <button 
              onClick={scrollToContact} 
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-700 transition-all font-sans hidden md:block"
            >
              Agendar Agora
            </button>

            <div className="md:hidden flex items-center">
              <a href="https://api.whatsapp.com/send?phone=5598984386083" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold transition-all">
                Agendar Agora
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
