import React from 'react';
import { Info } from 'lucide-react';

export function ProjectDescription() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <div className="flex items-start gap-4">
        <Info className="text-blue-500 w-6 h-6 mt-1 flex-shrink-0" />
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Sobre el Proyecto</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Este sistema de monitoreo de calidad del agua utiliza sensores especializados para medir 
              parámetros críticos en tiempo real. Los datos son recolectados mediante una ESP32, que 
              actúa como unidad de control principal, procesando y transmitiendo las mediciones a la 
              plataforma ThingSpeak.
            </p>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">Parámetros Monitoreados:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <span className="font-medium">Temperatura (°C):</span> Medición continua de la 
                  temperatura del agua, crucial para la vida acuática y procesos químicos.
                </li>
                <li>
                  <span className="font-medium">Turbidez (NTU):</span> Mide la claridad del agua 
                  utilizando un sensor óptico que detecta partículas suspendidas, indicando la 
                  calidad y transparencia del agua.
                </li>
              </ul>
            </div>
            <p>
              Los datos son actualizados cada 15 segundos, permitiendo un monitoreo constante y 
              la detección temprana de cambios significativos en la calidad del agua. Este sistema 
              forma parte de una iniciativa más amplia para el control y gestión eficiente de 
              recursos hídricos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}