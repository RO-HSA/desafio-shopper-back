import { Module } from '@nestjs/common';
import { GeminiService } from './gemini.service';
import { GeminiVisionModelProvider } from './gemini.provider';

@Module({
  providers: [GeminiService, GeminiVisionModelProvider],
  exports: [GeminiService],
})
export class GeminiModule {}
