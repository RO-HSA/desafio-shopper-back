import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CustomerService {
  constructor(private prisma: PrismaService) {}

  async findAllMeasures(id: string, measureType?: string) {
    if (measureType) {
      return await this.prisma.measure.findMany({
        where: { customer_code: id, measure_type: measureType.toLowerCase() },
      });
    }

    return await this.prisma.measure.findMany({
      where: { customer_code: id },
    });
  }
}
