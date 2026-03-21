import React, { useState } from 'react';
import PantallaConvencido from './components/PantallaConvencido';
import PantallaReservado from './components/PantallaReservado';
import PantallaEsceptico from './components/PantallaEsceptico';

function App() {
  // El "Estado" inicial es null para que muestre el menú de selección
  const [perfil, setPerfil] = useState(null);

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-4">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-black text-purple-900 italic">VÍA 51</h1>
        <p className="text-xs font-bold text-slate-500 tracking-widest uppercase">Nodo Central de Gestión</p>
      </header>

      {!perfil ? (
        <div className="w-full max-w-md space-y-4">
          <h2 className="text-center font-bold text-slate-700 mb-6">¿Cuál es su perfil de exigencia?</h2>
          
          <button onClick={() => setPerfil('convencido')} className="w-full p-5 bg-white border-l-8 border-purple-600 shadow-xl rounded-r-xl hover:scale-105 transition-transform text-left">
            <span className="block font-black text-purple-700 text-lg uppercase">1. EL CONVENCIDO</span>
            <span className="text-sm text-slate-500">"Quiero firmar mi Compromiso Bivalente."</span>
          </button>

          <button onClick={() => setPerfil('reservado')} className="w-full p-5 bg-white border-l-8 border-slate-400 shadow-xl rounded-r-xl hover:scale-105 transition-transform text-left">
            <span className="block font-black text-slate-800 text-lg uppercase">2. EL RESERVADO</span>
            <span className="text-sm text-slate-500">"Quiero auditar el equipo técnico."</span>
          </button>

          <button onClick={() => setPerfil('esceptico')} className="w-full p-5 bg-slate-900 border-l-8 border-red-600 shadow-xl rounded-r-xl hover:scale-105 transition-transform text-left">
            <span className="block font-black text-red-500 text-lg uppercase italic">3. EL INDIGNADO</span>
            <span className="text-sm text-slate-400">"Demuéstrenme que no son lo mismo."</span>
          </button>
        </div>
      ) : (
        <div className="w-full max-w-2xl">
          <button 
            onClick={() => setPerfil(null)} 
            className="mb-6 text-sm font-black text-purple-600 uppercase flex items-center"
          >
            ← Volver a Selección de Perfil
          </button>
          
          {/* Aquí React inyecta la pantalla elegida */}
          {perfil === 'convencido' && <PantallaConvencido />}
          {perfil === 'reservado' && <PantallaReservado />}
          {perfil === 'esceptico' && <PantallaEsceptico />}
        </div>
      )}

      <footer className="mt-16 text-[10px] text-slate-400 font-bold uppercase tracking-[0.5em]">
        Mesías Guevara | Calidad Mundial
      </footer>
    </div>
  );
}

export default App;