import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { buildErrorMessage } from 'src/utils';

@Injectable()
export class CustomerService {
  constructor(private prisma: PrismaService) {}

  async findAllMeasures(id: string, measureType?: string) {
    const measures = await this.prisma.measure.findMany({
      where: { customer_code: id },
    });

    if (measures.length === 0) {
      throw new NotFoundException(
        buildErrorMessage('MEASURES_NOT_FOUND', 'Nenhuma leitura encontrada'),
      );
    }

    if (measureType) {
      if (
        measureType.toLowerCase() !== 'water' &&
        measureType.toLowerCase() !== 'gas'
      ) {
        throw new BadRequestException(
          buildErrorMessage('INVALID_TYPE', 'Tipo de medição não permitida'),
        );
      }

      return await this.prisma.measure.findMany({
        where: { customer_code: id, measure_type: measureType.toLowerCase() },
      });
    }

    const response = {
      customer_code: id,
      measures: [...measures],
    };

    return response;
  }
}
