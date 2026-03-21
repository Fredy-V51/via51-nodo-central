const CartaCompromisoBivalente = ({ nombre, dni }) => {
  return (
    <div className="p-8 bg-white border-8 border-double border-purple-100 rounded-lg shadow-inner max-w-2xl mx-auto my-10 font-serif">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-extrabold text-purple-900 tracking-tighter">PACTO POR LA GESTIÓN TÉCNICA</h1>
        <p className="text-sm text-slate-500 uppercase tracking-widest mt-2">Vía 51 | Selección Nacional 2026</p>
      </div>

      <div className="border-y-2 border-slate-200 py-6 my-6 text-slate-700 leading-relaxed">
        <p className="mb-4">
          Yo, <span className="font-bold text-slate-900 underline">{nombre}</span>, identificado con DNI <span className="font-bold">{dni}</span>, 
          en mi facultad como ciudadano y reclutador del futuro del Perú, sello este compromiso con el equipo de **Mesías Guevara**.
        </p>
        
        <div className="grid grid-cols-2 gap-8 mt-8 text-xs">
          <div className="bg-slate-50 p-4 rounded border-l-4 border-purple-500">
            <h3 className="font-bold text-purple-800 mb-2 underline">MI COMPROMISO (CIUDADANO)</h3>
            <ul className="list-disc pl-4 space-y-1">
              <li>Vigilar la ejecución del Plan #1.</li>
              <li>Marcar la <strong>Última M</strong> en bloque.</li>
              <li>Ser las "andas" del desarrollo.</li>
            </ul>
          </div>
          <div className="bg-purple-50 p-4 rounded border-l-4 border-slate-800 text-slate-800">
            <h3 className="font-bold text-slate-900 mb-2 underline">NUESTRO COMPROMISO (VÍA 51)</h3>
            <ul className="list-disc pl-4 space-y-1 text-slate-800">
              <li>Mérito absoluto (Cero Vara).</li>
              <li>Ejecución técnica (16.5 Score).</li>
              <li>Cero "colitas" a financistas.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-end mt-12 opacity-80">
        <div className="text-center">
          <div className="h-1 bg-slate-400 w-32 mb-1 mx-auto"></div>
          <p className="text-[10px] uppercase">Firma del Ciudadano</p>
        </div>
        <div className="text-center">
          <img src="/firma-mesias.png" alt="Firma Mesías" className="h-12 mx-auto mb-1" />
          <p className="text-[10px] uppercase font-bold">Mesías Guevara Amasifuén</p>
          <p className="text-[9px] text-slate-400 italic">Presidente de la República (Electo por la Razón)</p>
        </div>
      </div>
    </div>
  );
};

export default CartaCompromisoBivalente;