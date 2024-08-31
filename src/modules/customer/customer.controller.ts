import { Controller, Get, Param, Query } from '@nestjs/common';
import { CustomerService } from './customer.service';

@Controller()
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get(':id/list')
  findAllMeasures(
    @Param('id') id: string,
    @Query('measure_type') measureType?: 'WATER' | 'GAS',
  ) {
    return this.customerService.findAllMeasures(id, measureType);
  }
}
