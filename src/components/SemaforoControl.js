import React, { useState } from 'react';
import { CAMPAIGN_DATA } from '../data/JS/candidato-config';

const SemaforoControl = () => {
    const [modo, setModo] = useState('ALFA'); // Modos: ALFA o CENIT

    // Estilos Base
    const fullScreen = { width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, overflow: 'hidden' };

    return (
        <div style={{ ...fullScreen, backgroundColor: '#000' }}>
            
            {/* 1. CAPA FONDO (CENIT) - SIEMPRE DEBAJO */}
            <div style={{
                ...fullScreen,
                backgroundImage: `url(${CAMPAIGN_DATA.assets.heroImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: 1
            }} />

            {/* 2. BOTÓN FLECHA DE RETORNO - SÓLO EN MODO CENIT */}
            {modo === 'CENIT' && (
                <button 
                    onClick={() => setModo('ALFA')}
                    style={{
                        position: 'fixed', top: '30px', left: '30px', zIndex: 9999,
                        width: '60px', height: '60px', borderRadius: '50%',
                        backgroundColor: 'white', color: 'black', border: '4px solid #622d91', // Color Morado de borde
                        fontSize: '35px', cursor: 'pointer', fontWeight: 'bold',
                        display: 'flex', justifyContent: 'center', alignItems: 'center',
                        boxShadow: '0 0 20px rgba(0,0,0,0.8)'
                    }}
                >
                    &#8592;
                </button>
            )}

            {/* 3. CAPA INTERFAZ (ALFA) - SÓLO EN MODO ALFA */}
            {modo === 'ALFA' && (
                <div style={{
                    ...fullScreen,
                    zIndex: 100,
                    backgroundColor: 'rgba(0,0,0,0.6)', // Oscurece el fondo para leer
                    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                    padding: '20px'
                }}>
                    <div style={{ maxWidth: '600px', textAlign: 'center' }}>
                        <h1 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '10px', textTransform: 'uppercase' }}>
                            {CAMPAIGN_DATA.cenit.linea1}
                        </h1>
                        <h2 style={{ color: 'white', fontSize: '1.5rem', opacity: 0.8, marginBottom: '30px' }}>
                            {CAMPAIGN_DATA.cenit.linea2}
                        </h2>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            {CAMPAIGN_DATA.botones.map((btn) => (
                                <button 
                                    key={btn.id} 
                                    onClick={() => setModo('CENIT')}
                                    style={{ 
                                        padding: '20px', backgroundColor: btn.color, 
                                        color: 'white', border: 'none', borderRadius: '12px', 
                                        fontWeight: 'bold', fontSize: '1.2rem', cursor: 'pointer',
                                        boxShadow: '0 5px 15px rgba(0,0,0,0.3)'
                                    }}
                                >
                                    {btn.etiqueta}
                                    <div style={{ fontSize: '0.8rem', fontWeight: 'normal', marginTop: '5px' }}>
                                        {btn.subtexto}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SemaforoControl;