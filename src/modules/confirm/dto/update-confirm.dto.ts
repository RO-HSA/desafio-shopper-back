import { PartialType } from '@nestjs/mapped-types';
import { CreateConfirmDto } from './create-confirm.dto';

export class UpdateConfirmDto extends PartialType(CreateConfirmDto) {}
