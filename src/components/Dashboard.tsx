import React, { useEffect, useState } from 'react';
import { Thermometer, Waves } from 'lucide-react';
import { WaterQualityData } from '../types/waterQuality';
import { fetchWaterQualityData } from '../services/thingspeak';
import { MetricCard } from './MetricCard';
import { WaterQualityChart } from './WaterQualityChart';
import { ProjectDescription } from './ProjectDescription';
import { VideoSection } from './VideoSection';
import { getTemperatureColor, getTurbidityColor } from '../utils/waterQualityColors';

export function Dashboard() {
  const [data, setData] = useState<WaterQualityData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newData = await fetchWaterQualityData();
        setData(newData);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 15000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  const latestData = data[data.length - 1];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Monitoreo de Calidad del Agua</h1>
          <p className="text-gray-600">Datos actualizados en tiempo real</p>
        </div>

        <ProjectDescription />
        
        <VideoSection />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <MetricCard
            title="Temperatura"
            value={latestData.temperature}
            unit="°C"
            icon={<Thermometer className="text-red-500" />}
            color="hover:bg-red-50"
            maxValue={50}
            type="temperature"
          />
          <MetricCard
            title="Turbidez"
            value={latestData.turbidity}
            unit="NTU"
            icon={<Waves className="text-green-500" />}
            color="hover:bg-green-50"
            maxValue={1000}
            type="turbidity"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <WaterQualityChart
            data={data}
            metric="temperature"
            title="Temperatura"
            color={getTemperatureColor(latestData.temperature)}
            unit="°C"
          />
          <WaterQualityChart
            data={data}
            metric="turbidity"
            title="Turbidez"
            color={getTurbidityColor(latestData.turbidity)}
            unit="NTU"
          />
        </div>
      </div>
    </div>
  );
}