import { GenerativeModel } from '@google/generative-ai';
import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { GEMINI_MODEL } from './gemini.constant';
import { createImageParts } from './helpers/image.helper';

@Injectable()
export class GeminiService {
  constructor(
    @Inject(GEMINI_MODEL)
    private readonly visionModel: GenerativeModel,
  ) {}

  async generateTextFromImage(base64File: string): Promise<number> {
    try {
      const prompt =
        'Analyze the image and tell me the current measurement, output only the value as a integer';
      const imageParts = createImageParts(base64File);

      const result = await this.visionModel.generateContent([
        imageParts,
        prompt,
      ]);

      const response = result.response.text();

      return +response;
    } catch (err) {
      if (err instanceof Error) {
        throw new InternalServerErrorException(err.message, err.stack);
      }
      throw err;
    }
  }
}
