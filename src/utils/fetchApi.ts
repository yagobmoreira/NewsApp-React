import { News } from './types';

export const fetchApi = async (url: string): Promise<News> => {
  try {
    const response = await fetch(url);
    if (!response.ok && response.status !== 200) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
