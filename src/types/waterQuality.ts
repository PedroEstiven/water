export interface WaterQualityData {
  temperature: number;
  turbidity: number;
  timestamp: string;
}

export interface ThingSpeakResponse {
  channel: {
    id: number;
    name: string;
    description: string;
    created_at: string;
    updated_at: string;
  };
  feeds: Array<{
    created_at: string;
    entry_id: number;
    field1: string; // Turbidity
    field2: string; // Temperature
  }>;
}