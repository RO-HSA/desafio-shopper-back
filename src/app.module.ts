import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UploadModule } from './modules/upload/upload.module';
import { GeminiModule } from './modules/gemini/gemini.module';
import { ConfirmModule } from './modules/confirm/confirm.module';

@Module({
  imports: [ConfigModule.forRoot(), UploadModule, GeminiModule, ConfirmModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
