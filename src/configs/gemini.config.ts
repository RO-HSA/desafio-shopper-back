import { GenerationConfig } from '@google/generative-ai';

export const GENERATION_CONFIG: GenerationConfig = {
  maxOutputTokens: 1024,
  temperature: 1,
  topK: 64,
  topP: 0.95,
  responseMimeType: 'text/plain',
};
