import { MapPin, Mail, Phone, Clock } from "lucide-react";

export function Contact() {
  return (
    <div id="contato" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-blue-600 font-bold uppercase tracking-[0.2em] mb-4 text-xs block">Localização</span>
            <h2 className="text-4xl font-extrabold mb-6 text-slate-900 tracking-tight">Entre em Contato</h2>
            <p className="text-slate-500 mb-10 text-lg leading-relaxed">
              Estamos prontos para atender você e seu veículo com excelência. 
              Mande uma mensagem ou faça-nos uma visita.
            </p>
            
            <div className="space-y-6">
              <a href="https://maps.app.goo.gl/1ekhitAia1GTLYMy8" target="_blank" rel="noopener noreferrer" className="flex items-start group">
                <div className="mt-1 bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100 transition-colors">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-slate-900">Endereço</h4>
                  <p className="text-slate-500 mt-1 leading-relaxed text-sm">
                    Rua 27, nº 64, Quadra 60, Areinha<br />
                    São Luís - MA, CEP: 65.032-120
                  </p>
                </div>
              </a>
              
              <a href="https://api.whatsapp.com/send?phone=5598984386083&text=Olá Auto Mecânica" target="_blank" rel="noopener noreferrer" className="flex items-start group">
                <div className="mt-1 bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100 transition-colors">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-slate-900">WhatsApp</h4>
                  <p className="text-slate-500 mt-1 text-sm">(98) 98438-6083</p>
                </div>
              </a>
              
              <a href="mailto:automecanicaslz@gmail.com" className="flex items-start group">
                <div className="mt-1 bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100 transition-colors">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-slate-900">E-mail</h4>
                  <p className="text-slate-500 mt-1 text-sm">automecanicaslz@gmail.com</p>
                </div>
              </a>

              <div className="flex items-start">
                <div className="mt-1 bg-blue-50 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-slate-900">Horário de Funcionamento</h4>
                  <p className="text-slate-500 mt-1 text-sm">Seg - Sex: 08:00 às 18:00</p>
                  <p className="text-slate-500 text-sm">Sáb: 08:00 às 12:00</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="rounded-3xl overflow-hidden shadow-sm border border-slate-100 bg-slate-50 h-[500px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15942.348612140683!2d-44.29828555!3d-2.52988105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7f68ee3df9f928f%3A0xc3fec30e38bc8df2!2sAreinha%2C%20S%C3%A3o%20Lu%C3%ADs%20-%20State%20of%20Maranh%C3%A3o!5e0!3m2!1sen!2sbr!4v1717200000000!5m2!1sen!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de Localização"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
