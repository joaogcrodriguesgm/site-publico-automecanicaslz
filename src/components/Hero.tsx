import { Wrench, ShieldCheck, Star } from "lucide-react";

interface HeroProps {
  onNavigate: (view: 'home' | 'services' | 'privacy') => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <div className="bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-16 lg:py-24 items-center">
          <div className="flex flex-col justify-center">
            <span className="text-blue-600 font-bold uppercase tracking-[0.2em] mb-4 text-xs">Oficina Especializada em São Luís</span>
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] text-slate-900 mb-6">
              Cuidado de <br/><span className="text-blue-600">Especialista</span><br/> para seu veículo.
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed mb-8 max-w-md">
              Oferecemos serviços de alta qualidade nas áreas de funilaria, pintura, customização e reparos gerais. Nossa equipe está comprometida com a excelência em cada detalhe.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="https://api.whatsapp.com/send?phone=5598984386083&text=Olá Auto Mecânica" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all font-sans text-center">
                Agendar Orçamento
              </a>
              <button onClick={() => onNavigate('services')} className="inline-flex items-center justify-center px-8 py-4 border border-slate-200 text-base font-bold rounded-full text-slate-700 hover:text-blue-600 hover:border-blue-200 bg-white transition-all font-sans">
                Conheça Nossos Serviços
              </button>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-slate-900">15+</span>
                <span className="text-xs uppercase tracking-widest text-slate-400 mt-1">Anos de Experiência</span>
              </div>
              <div className="w-px h-12 bg-slate-200"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-slate-900">5000+</span>
                <span className="text-xs uppercase tracking-widest text-slate-400 mt-1">Carros Atendidos</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 lg:p-12 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col justify-center">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-8">Nossos Diferenciais</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 border border-slate-100 rounded-2xl bg-slate-50 hover:border-blue-200 transition-all">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-1">Equipe Especializada</h3>
                <p className="text-xs text-slate-500 leading-relaxed">Profissionais altamente qualificados.</p>
              </div>
              <div className="p-6 border border-slate-100 rounded-2xl bg-slate-50 hover:border-blue-200 transition-all">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-1">Garantia de Qualidade</h3>
                <p className="text-xs text-slate-500 leading-relaxed">Serviços executados com precisão.</p>
              </div>
              <div className="p-6 border border-slate-100 rounded-2xl bg-slate-50 hover:border-blue-200 transition-all sm:col-span-2">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-1">Atendimento Premium</h3>
                <p className="text-xs text-slate-500 leading-relaxed">Cuidado em cada detalhe, do orçamento à entrega do seu veículo.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
