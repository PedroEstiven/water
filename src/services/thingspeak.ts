import axios from 'axios';
import { ThingSpeakResponse, WaterQualityData } from '../types/waterQuality';

const CHANNEL_ID = '2715222';
const BASE_URL = 'https://api.thingspeak.com';

export async function fetchWaterQualityData(): Promise<WaterQualityData[]> {
  try {
    const response = await axios.get<ThingSpeakResponse>(
      `${BASE_URL}/channels/${CHANNEL_ID}/feeds.json?results=60`
    );

    return response.data.feeds.map(feed => ({
      temperature: parseFloat(feed.field2),
      turbidity: parseFloat(feed.field1),
      timestamp: feed.created_at
    }));
  } catch (error) {
    console.error('Error al obtener datos de calidad del agua:', error);
    throw error;
  }
}