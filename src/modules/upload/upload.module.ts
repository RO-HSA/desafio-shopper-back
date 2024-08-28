import { Module } from '@nestjs/common';
import { UploadService } from './upload.service';
import { UploadController } from './upload.controller';
import { GeminiService } from '../gemini/gemini.service';
import { GeminiVisionModelProvider } from '../gemini/gemini.provider';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [UploadController],
  providers: [
    UploadService,
    GeminiService,
    GeminiVisionModelProvider,
    PrismaService,
  ],
})
export class UploadModule {}
