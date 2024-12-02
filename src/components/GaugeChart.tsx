import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import { getTemperatureColor, getTurbidityColor, getTurbidityLevel } from '../utils/waterQualityColors';

interface GaugeChartProps {
  value: number;
  maxValue: number;
  unit: string;
  type: 'temperature' | 'turbidity';
}

export function GaugeChart({ value, maxValue, unit, type }: GaugeChartProps) {
  const [isBlinking, setIsBlinking] = useState(false);
  const percentage = (value / maxValue) * 100;
  const data = [
    { name: 'value', value: percentage },
    { name: 'empty', value: 100 - percentage }
  ];

  const color = type === 'temperature' 
    ? getTemperatureColor(value)
    : getTurbidityColor(value);

  useEffect(() => {
    if (type === 'turbidity') {
      const interval = setInterval(() => {
        setIsBlinking(prev => !prev);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [type]);

  const gaugeStyle = type === 'turbidity' && isBlinking
    ? { filter: 'brightness(1.3)' }
    : {};

  return (
    <div className="relative w-32 h-32">
      <PieChart width={128} height={128} style={gaugeStyle}>
        <Pie
          data={data}
          cx={64}
          cy={64}
          startAngle={180}
          endAngle={0}
          innerRadius={40}
          outerRadius={60}
          paddingAngle={0}
          dataKey="value"
        >
          <Cell fill={color} />
          <Cell fill="#f3f4f6" />
        </Pie>
      </PieChart>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-lg font-bold" style={{ color }}>{value.toFixed(1)}</span>
        <span className="text-xs text-gray-500">{unit}</span>
        {type === 'turbidity' && (
          <span 
            className="text-xs font-medium mt-1 px-2 py-0.5 rounded-full" 
            style={{ 
              backgroundColor: color,
              color: 'white',
              opacity: isBlinking ? 0.9 : 1,
              transition: 'opacity 0.5s ease-in-out'
            }}
          >
            {getTurbidityLevel(value)}
          </span>
        )}
      </div>
    </div>
  );
}