import crypto from 'crypto';
import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUploadDto } from './dto/create-upload.dto';
import { GeminiService } from '../gemini/gemini.service';
import { PrismaService } from 'src/prisma.service';
import { buildErrorMessage } from 'src/utils';
import { UploadResponse } from './interface/response.interface';

@Injectable()
export class UploadService {
  constructor(
    private readonly geminiService: GeminiService,
    private prisma: PrismaService,
  ) {}

  async create(data: CreateUploadDto) {
    const { image, customer_code, measure_type, measure_datetime } = data;
    const measures = await this.prisma.measure.findMany({
      where: { customer_code },
    });

    const measureExists = measures.find((measure) => {
      const currentMeasureMonth = new Date(measure.measure_datetime).getMonth();
      const currentMeasureYear = new Date(
        measure.measure_datetime,
      ).getFullYear();
      const incomingMeasureMonth = new Date(measure_datetime).getMonth();
      const incomingMeasureYear = new Date(measure_datetime).getFullYear();

      if (
        currentMeasureMonth === incomingMeasureMonth &&
        currentMeasureYear === incomingMeasureYear &&
        measure.measure_type === measure_type.toLowerCase()
      ) {
        return true;
      }

      return false;
    });

    if (measureExists) {
      throw new ConflictException(
        buildErrorMessage('DOUBLE_REPORT', 'Leitura do mês já realizada'),
      );
    }

    const measureValue = await this.geminiService.generateTextFromImage(image);

    const uuid = crypto.randomUUID();

    await this.prisma.customer.create({
      data: {
        customer_code,
        measures: {
          create: {
            measure_uuid: uuid,
            measure_type: measure_type.toLowerCase(),
            measure_value: measureValue,
            measure_datetime: new Date(measure_datetime),
            image_url: 'https://localhost',
          },
        },
      },
    });

    const response: UploadResponse = {
      image_url: 'https://localhost',
      measure_value: measureValue,
      measure_uuid: uuid,
    };
    return response;
  }
}
