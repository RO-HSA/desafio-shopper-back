import { IsNumber, IsOptional, IsUUID } from 'class-validator';

export class CreateConfirmDto {
  @IsUUID(4)
  measure_uuid: string;
  @IsNumber()
  @IsOptional()
  confirmed_value?: number;
}
