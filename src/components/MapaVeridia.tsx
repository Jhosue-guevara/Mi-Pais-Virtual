import React from 'react';

interface RegionInfo {
  nombre: string;
  descripcion: string;
  color: string;
  coordenadas: { x: number; y: number };
}

const regionesInfo: { [key: string]: RegionInfo } = {
    'Nova Aurelia': {
      nombre: 'Nova Aurelia',
      descripcion: 'Capital nacional y centro administrativo de Veridia',
      color: '#2E7D32',
      coordenadas: { x: 25, y: 22 }
    },
    'Verdantia': {
      nombre: 'Verdantia',
      descripcion: 'Región agrícola y ganadera, conocida por sus extensos campos verdes',
      color: '#388E3C',
      coordenadas: { x: 20, y: 35 }
    },
    'Aurestia': {
      nombre: 'Aurestia',
      descripcion: 'Centro histórico y cultural, hogar de importantes instituciones educativas',
      color: '#43A047',
      coordenadas: { x: 40, y: 35 }
    },
    'Luminara': {
      nombre: 'Luminara',
      descripcion: 'Región costera con puertos comerciales y hermosas playas',
      color: '#4CAF50',
      coordenadas: { x: 35, y: 15 }
    },
    'Cristaria': {
      nombre: 'Cristaria',
      descripcion: 'Región montañosa rica en minerales y cristales preciosos',
      color: '#66BB6A',
      coordenadas: { x: 75, y: 25 }
    },
    'Solmara': {
      nombre: 'Solmara',
      descripcion: 'Región cálida conocida por su producción de energía solar',
      color: '#81C784',
      coordenadas: { x: 75, y: 35 }
    },
    'Nebularia': {
      nombre: 'Nebularia',
      descripcion: 'Región de clima templado con importantes centros de investigación',
      color: '#A5D6A7',
      coordenadas: { x: 50, y: 50 }
    },
    'Thaluria': {
      nombre: 'Thaluria',
      descripcion: 'Región de grandes lagos y recursos hídricos',
      color: '#2E7D32',
      coordenadas: { x: 45, y: 65 }
    },
    'Iridia': {
      nombre: 'Iridia',
      descripcion: 'Centro de innovación tecnológica y desarrollo sostenible',
      color: '#388E3C',
      coordenadas: { x: 25, y: 60 }
    },
    'Floriana': {
      nombre: 'Floriana',
      descripcion: 'Región conocida por su biodiversidad y jardines botánicos',
      color: '#43A047',
      coordenadas: { x: 30, y: 45 }
    },
    'Elyra': {
      nombre: 'Elyra',
      descripcion: 'Centro de artes y tradiciones culturales',
      color: '#4CAF50',
      coordenadas: { x: 65, y: 50 }
    }
};

export const MapaVeridia: React.FC = () => {
  return (
    <div className="mapa-container max-w-7xl mx-auto px-4 py-8">
      <div className="mapa-wrapper mb-8">
        <div className="relative max-w-xl mx-auto">
          <img 
            src="/mapa-veridia.png" 
            alt="Mapa de Veridia" 
            className="w-full h-auto mx-auto block"
            style={{
              maxWidth: '100%',
              width: '400px',
              margin: '0 auto',
              display: 'block'
            }}
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto px-4">
        {Object.entries(regionesInfo).map(([regionKey, info]) => (
          <div
            key={regionKey}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
            style={{ borderTop: `4px solid ${info.color}` }}
          >
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2" style={{ color: info.color }}>
                {info.nombre}
              </h3>
              <p className="text-gray-600">
                {info.descripcion}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

function getRegionStyle(region: string): React.CSSProperties {
  // Posiciones aproximadas para cada región en porcentajes
  const positions: { [key: string]: { top: string, left: string, width: string, height: string } } = {
    'Nova Aurelia': { top: '10%', left: '45%', width: '10%', height: '10%' },
    'Silvaria': { top: '20%', left: '20%', width: '15%', height: '15%' },
    'Luminara': { top: '15%', left: '60%', width: '15%', height: '15%' },
    'Aurestia': { top: '35%', left: '55%', width: '15%', height: '15%' },
    'Solmara': { top: '45%', left: '45%', width: '15%', height: '15%' },
    'Thaluria': { top: '55%', left: '35%', width: '15%', height: '15%' },
    'Nilaularia': { top: '45%', left: '25%', width: '15%', height: '15%' },
    'Irlidia': { top: '60%', left: '15%', width: '15%', height: '15%' },
    'Verdantia': { top: '30%', left: '15%', width: '15%', height: '15%' }
  };

  return {
    ...positions[region],
  };
}
