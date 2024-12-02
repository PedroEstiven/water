import React from 'react';
import { GaugeChart } from './GaugeChart';

interface MetricCardProps {
  title: string;
  value: number;
  unit: string;
  icon: React.ReactNode;
  color: string;
  maxValue: number;
  type: 'temperature' | 'turbidity';
}

export function MetricCard({ title, value, unit, icon, color, maxValue, type }: MetricCardProps) {
  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 transition-all duration-300 ${color}`}>
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="text-2xl">{icon}</div>
            <p className="text-gray-500 text-sm font-medium">{title}</p>
          </div>
          <p className="text-3xl font-bold">
            {value.toFixed(2)} {unit}
          </p>
        </div>
        <GaugeChart
          value={value}
          maxValue={maxValue}
          unit={unit}
          type={type}
        />
      </div>
    </div>
  );
}