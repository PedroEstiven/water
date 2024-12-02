import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { WaterQualityData } from '../types/waterQuality';

interface WaterQualityChartProps {
  data: WaterQualityData[];
  metric: keyof WaterQualityData;
  title: string;
  color: string;
  unit: string;
}

export function WaterQualityChart({ data, metric, title, color, unit }: WaterQualityChartProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 h-[300px]">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis
            dataKey="timestamp"
            tickFormatter={(value) => new Date(value).toLocaleTimeString('es-ES')}
            stroke="#666"
          />
          <YAxis stroke="#666" />
          <Tooltip
            labelFormatter={(value) => new Date(value).toLocaleString('es-ES')}
            formatter={(value) => [`${value} ${unit}`, title]}
            contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', borderRadius: '6px' }}
          />
          <Line
            type="monotone"
            dataKey={metric}
            stroke={color}
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}