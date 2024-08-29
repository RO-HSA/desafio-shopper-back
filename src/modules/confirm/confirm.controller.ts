import {
  Controller,
  Body,
  Patch,
  ValidationPipe,
  BadRequestException,
} from '@nestjs/common';
import { ConfirmService } from './confirm.service';
import { CreateConfirmDto } from './dto/create-confirm.dto';
import { buildErrorMessage } from 'src/utils';

@Controller('confirm')
export class ConfirmController {
  constructor(private readonly confirmService: ConfirmService) {}

  @Patch()
  patch(
    @Body(
      new ValidationPipe({
        exceptionFactory: () => {
          return new BadRequestException(
            buildErrorMessage(
              'INVALID_DATA',
              'Os dados fornecidos no corpo da requisição são inválidos',
            ),
          );
        },
      }),
    )
    createConfirmDto: CreateConfirmDto,
  ) {
    return this.confirmService.patch(createConfirmDto);
  }
}
