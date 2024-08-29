import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateConfirmDto } from './dto/create-confirm.dto';
import { PrismaService } from 'src/prisma.service';
import { buildErrorMessage } from 'src/utils';

@Injectable()
export class ConfirmService {
  constructor(private prisma: PrismaService) {}
  async patch(data: CreateConfirmDto) {
    const { measure_uuid, confirmed_value } = data;

    const measure = await this.prisma.measure.findUnique({
      where: { measure_uuid },
    });

    if (!measure) {
      throw new NotFoundException(
        buildErrorMessage('MEASURE_NOT_FOUND', 'Leitura não encontrada'),
      );
    }

    if (measure.has_confirmed) {
      throw new ConflictException(
        buildErrorMessage('CONFIRMATION_DUPLICATE', 'Leitura já confirmada'),
      );
    }

    await this.prisma.measure.update({
      where: { measure_uuid },
      data: { has_confirmed: true, measure_value: confirmed_value },
    });

    return { success: true };
  }
}
