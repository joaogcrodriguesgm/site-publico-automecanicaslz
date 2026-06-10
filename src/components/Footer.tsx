import { Instagram, Facebook, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 p-8 sm:p-12 lg:p-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        <div>
          <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">Localização</h4>
          <p className="text-sm leading-relaxed">
            Rua 27, nº 64, Quadra 60<br/>
            Areinha, São Luís - MA<br/>
            CEP: 65.032-120<br/>
            (98) 98438-6083
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">Política de Privacidade</h4>
          <p className="text-[12px] leading-relaxed opacity-80">
            Nós coletamos apenas os dados necessários para o atendimento e os orçamentos de seus serviços. Suas informações são protegidas e nunca compartilhadas com terceiros sem consentimento explícito. Respeitamos a LGPD em todos os nossos processos internos.
          </p>
        </div>
        <div className="md:text-right flex flex-col md:items-end">
          <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">Horário</h4>
          <p className="text-sm mb-1">Seg - Sex: 08:00 às 18:00</p>
          <p className="text-sm mb-6">Sáb: 08:00 às 12:00</p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://api.whatsapp.com/send?phone=5598984386083" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800 text-center text-xs opacity-60 flex flex-col sm:flex-row justify-between items-center gap-4">
        <span>&copy; {new Date().getFullYear()} Auto Mecânica São Luís. Todos os direitos reservados.</span>
        <span>Desenvolvido com excelência.</span>
      </div>
    </footer>
  );
}
