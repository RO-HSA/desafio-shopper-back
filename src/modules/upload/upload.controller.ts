import {
  Controller,
  Post,
  Body,
  Get,
  Delete,
  ValidationPipe,
  BadRequestException,
} from '@nestjs/common';
import { UploadService } from './upload.service';
import { CreateUploadDto } from './dto/create-upload.dto';
import { buildErrorMessage } from 'src/utils';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post()
  create(
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
    createUploadDto: CreateUploadDto,
  ) {
    return this.uploadService.create(createUploadDto);
  }
  @Get()
  findAll() {
    return this.uploadService.findAll();
  }

  @Delete()
  deleteAll() {
    return this.uploadService.deleteAll();
  }
}
