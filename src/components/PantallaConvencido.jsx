import React, { useState } from 'react';
import { supabase } from '../supabaseClient'; // Tu config de Supabase
import CartaCompromisoBivalente from './CartaCompromisoBivalente';

const PantallaConvencido = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ dni: '', nombre: '', whatsapp: '' });
  const [registrado, setRegistrado] = useState(false);

  const handleRegistro = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validación de "Criterio de Selección" (Tu regla del 8888)
    if (!form.dni.startsWith('8888')) {
      alert("Acceso denegado: El perfil no cumple con los requisitos de validación inicial.");
      setLoading(false);
      return;
    }

    try {
      const { error } = await supabase
        .from('pol_registro_ciudadano')
        .insert([{ 
          dni: form.dni, 
          full_name: form.nombre, 
          phone: form.whatsapp,
          perfil_id: 1, // ID para "El Convencido"
          ubicacion_cedula: 'ULTIMA_M' 
        }]);

      if (error) throw error;
      setRegistrado(true);
    } catch (error) {
      console.error("Error en la selección:", error.message);
    } finally {
      setLoading(false);
    }
  };

  if (registrado) return <CartaCompromisoBivalente nombre={form.nombre} dni={form.dni} />;

  return (
    <div className="bg-slate-50 p-6 rounded-xl border-t-4 border-purple-600 shadow-2xl">
      <h2 className="text-2xl font-bold text-slate-800">Selección de Personal 2026</h2>
      <p className="text-slate-600 mb-6 italic">
        "Bienvenido al equipo que no se rinde. Tu firma es el contrato con el Plan #1 del Perú."
      </p>

      <form onSubmit={handleRegistro} className="space-y-4">
        <input 
          type="text" 
          placeholder="Ingresa tu DNI (Requisito)" 
          className="w-full p-3 border rounded shadow-inner"
          onChange={(e) => setForm({...form, dni: e.target.value})}
          required 
        />
        <input 
          type="text" 
          placeholder="Nombre Completo" 
          className="w-full p-3 border rounded shadow-inner"
          onChange={(e) => setForm({...form, nombre: e.target.value})}
          required 
        />
        <input 
          type="tel" 
          placeholder="WhatsApp (Nodo de Movilización)" 
          className="w-full p-3 border rounded shadow-inner"
          onChange={(e) => setForm({...form, whatsapp: e.target.value})}
          required 
        />

        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-purple-700 hover:bg-purple-800 text-white font-bold py-4 rounded-lg transition-all transform hover:scale-105"
        >
          {loading ? "VALIDANDO CREDENCIALES..." : "FIRMAR COMPROMISO DE HONOR"}
        </button>
      </form>
      
      <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500">
        <span className="p-1 bg-green-100 text-green-700 rounded font-bold">Plan #1 Videnza/IPE</span>
        <span>•</span>
        <span>Ubicación: Última fila de la cédula</span>
      </div>
    </div>
  );
};

export default PantallaConvencido;