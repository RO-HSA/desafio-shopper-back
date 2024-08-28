import { Provider } from '@nestjs/common';
import { GEMINI_MODEL } from './gemini.constant';
import { GenerativeModel, GoogleGenerativeAI } from '@google/generative-ai';
import { GENERATION_CONFIG } from '../../configs/gemini.config';

export const GeminiVisionModelProvider: Provider<GenerativeModel> = {
  provide: GEMINI_MODEL,
  useFactory: () => {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    return genAI.getGenerativeModel({
      model: 'gemini-1.5-flash',
      generationConfig: GENERATION_CONFIG,
    });
  },
};
