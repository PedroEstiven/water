import React from 'react';
import { Play } from 'lucide-react';

export function VideoSection() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <Play className="text-blue-500" />
        Demostración del Proyecto
      </h2>
      <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/91-Cwv6CI-g"
          title="Demostración del Sistema de Monitoreo de Calidad del Agua"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p className="mt-4 text-gray-600">
        Este video muestra el funcionamiento del sistema de monitoreo de calidad del agua en tiempo real,
        incluyendo la implementación de los sensores y la visualización de datos.
      </p>
    </div>
  );
}