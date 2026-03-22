import React, { useState } from 'react';
import { CAMPAIGN_DATA } from '../data/JS/candidato-config';

const SemaforoControl = () => {
    // ESTADO: ¿Está la interfaz Alfa activa?
    const [alfaActiva, setAlfaActiva] = useState(true);

    const layout = {
        width: '100vw', height: '100vh', position: 'fixed',
        top: 0, left: 0, backgroundColor: '#000', fontFamily: 'Arial, sans-serif'
    };

    return (
        <div style={layout}>
            {/* 1. FONDO (CENIT): Inmutable en el fondo */}
            <div style={{
                position: 'absolute', width: '100%', height: '100%',
                backgroundImage: `url(${CAMPAIGN_DATA.assets.heroImage})`,
                backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 1
            }} />

            {/* 2. FLECHA DE RETROCESO: Aparece solo cuando Alfa se limpia */}
            {!alfaActiva && (
                <button 
                    onClick={() => setAlfaActiva(true)} // Retira flecha, restaura Alfa
                    style={{
                        position: 'fixed', top: '30px', left: '30px', zIndex: 9999,
                        width: '60px', height: '60px', borderRadius: '50%',
                        backgroundColor: '#622d91', color: 'white', border: '3px solid white',
                        fontSize: '35px', cursor: 'pointer', fontWeight: 'bold',
                        boxShadow: '0 5px 20px rgba(0,0,0,0.6)', display: 'flex',
                        justifyContent: 'center', alignItems: 'center'
                    }}
                >
                    ←
                </button>
            )}

            {/* 3. CAPA INTERFAZ ALFA: Se limpia (desmonta) al pulsar un botón */}
            {alfaActiva && (
                <div style={{
                    position: 'relative', zIndex: 10, width: '100%', height: '100%',
                    backgroundColor: 'rgba(0,0,0,0.65)', display: 'flex',
                    flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
                }}>
                    <h1 style={{ color: 'white', textAlign: 'center', fontSize: '2.5rem', marginBottom: '40px' }}>
                        {CAMPAIGN_DATA.cenit.linea1}
                    </h1>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        {CAMPAIGN_DATA.botones.map((btn) => (
                            <button 
                                key={btn.id} 
                                onClick={() => setAlfaActiva(false)} // Limpia Alfa, pone flecha
                                style={{ 
                                    padding: '22px 55px', backgroundColor: btn.color, 
                                    color: 'white', border: 'none', borderRadius: '12px', 
                                    fontWeight: 'bold', fontSize: '1.2rem', cursor: 'pointer',
                                    boxShadow: '0 4px 15px rgba(0,0,0,0.4)'
                                }}
                            >
                                {btn.etiqueta.toUpperCase()}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SemaforoControl;