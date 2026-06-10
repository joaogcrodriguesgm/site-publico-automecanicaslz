import { Car, Wrench, ShieldCheck, SprayCan } from "lucide-react";

const services = [
  {
    title: "Funilaria",
    description: "Reparos estruturais e de lataria com precisão, utilizando equipamentos modernos para devolver a originalidade do seu veículo.",
    icon: <Wrench className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Pintura",
    description: "Pintura automotiva de alta qualidade, estufa especializada e colorimetria exata para um acabamento impecável.",
    icon: <SprayCan className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Customização",
    description: "Projetos de customização personalizados para deixar seu carro com a sua identidade, único e com estilo.",
    icon: <Car className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Serviços com Seguradora",
    description: "Atendimento ágil para reparos cobertos por seguro. Cuidamos de toda a burocracia para sua tranquilidade.",
    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />
  }
];

export function Services() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-[0.2em] mb-4 text-xs block">Especialidades</span>
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl mb-6">
            Nossos Serviços
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços automotivos para garantir que seu veículo esteja sempre em perfeitas condições.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="p-8 border border-slate-100 rounded-2xl bg-slate-50 hover:border-blue-200 transition-all flex flex-col justify-start">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
