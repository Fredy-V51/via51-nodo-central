import React, { useState } from 'react';

const PantallaEsceptico = () => {
  const [visto, setVisto] = useState(false);

  return (
    <div className="bg-slate-900 p-8 rounded-xl border-t-4 border-red-600 shadow-2xl text-white">
      <div className="mb-6">
        <h2 className="text-3xl font-black text-red-500 tracking-tighter uppercase italic">
          ¡BASTA DE TOCAR FONDO!
        </h2>
        <p className="text-slate-400 mt-2 font-medium">
          Si votas por "el menos malo", el resultado siempre será el mismo.
        </p>
      </div>

      <div className="bg-slate-800 p-5 rounded-lg border-l-4 border-yellow-500 mb-8">
        <p className="text-sm leading-relaxed italic">
          "Nos dijeron que robaba pero hacía obra. Nos dijeron que eran 'de pueblo'. 
          Hoy la inseguridad nos encierra y la economía nos castiga. 
          Votar por votar es un lujo que el Perú ya no puede darse."
        </p>
      </div>

      {!visto ? (
        <div className="space-y-6">
          <p className="text-center text-xs uppercase tracking-widest text-slate-500 font-bold">
            AUDITORÍA TÉCNICA 2026
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-slate-700 rounded text-center">
              <span className="block text-2xl font-bold text-green-400 underline">1er LUGAR</span>
              <span className="text-[10px] uppercase">Plan de Gobierno</span>
            </div>
            <div className="p-4 bg-slate-700 rounded text-center">
              <span className="block text-2xl font-bold text-white">16.5</span>
              <span className="text-[10px] uppercase underline">Puntaje Videnza</span>
            </div>
          </div>
          <button 
            onClick={() => setVisto(true)}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-5 rounded-lg transition-all animate-pulse"
          >
            VER EL MAPA PARA SALIR DEL FONDO
          </button>
        </div>
      ) : (
        <div className="animate-fade-in space-y-4">
          <div className="p-4 bg-white text-slate-900 rounded-lg shadow-inner">
            <h3 className="font-bold text-sm mb-2 uppercase">Diagnóstico de Selección:</h3>
            <p className="text-xs mb-2 font-semibold">
              El Partido Morado es el único con aprobación técnica por 2da vez consecutiva.
            </p>
            <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-purple-600 w-[82%]"></div>
            </div>
            <p className="text-[9px] mt-1 text-slate-500">Capacidad de Gestión: 82.5% vs Promedio Nacional: 35%</p>
          </div>

          <button className="w-full bg-purple-700 hover:bg-purple-800 text-white font-bold py-4 rounded-lg">
            DEJAR DE SER ESPECTADOR: REGISTRARME
          </button>
        </div>
      )}

      <div className="mt-6 flex justify-between items-center opacity-50 text-[9px]">
        <span>FUENTE: IPE / VIDENZA</span>
        <span>UBICACIÓN: ÚLTIMA M (ABAJO A LA DERECHA)</span>
      </div>
    </div>
  );
};

export default PantallaEsceptico;