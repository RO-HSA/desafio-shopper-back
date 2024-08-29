import { Module } from '@nestjs/common';
import { ConfirmService } from './confirm.service';
import { ConfirmController } from './confirm.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ConfirmController],
  providers: [ConfirmService, PrismaService],
})
export class ConfirmModule {}
