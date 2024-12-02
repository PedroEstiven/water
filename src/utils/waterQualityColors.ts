export function getTemperatureColor(value: number): string {
  if (value <= 10) return '#3498db'; // Azul - Muy frío
  if (value <= 20) return '#2ecc71'; // Verde - Óptimo
  if (value <= 30) return '#f1c40f'; // Amarillo - Advertencia
  return '#e74c3c'; // Rojo - Crítico
}

export function getTurbidityColor(value: number): string {
  if (value <= 1000) return '#2ecc71'; // Verde - Baja turbidez
  if (value <= 2119) return '#3498db'; // Azul - Turbidez moderada
  return '#e74c3c'; // Rojo - Alta turbidez
}

export function getTurbidityLevel(value: number): string {
  if (value <= 1000) return 'Baja';
  if (value <= 2119) return 'Moderada';
  return 'Alta';
}