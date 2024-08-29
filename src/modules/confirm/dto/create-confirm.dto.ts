import { IsNumber, IsUUID } from 'class-validator';

export class CreateConfirmDto {
  @IsUUID(4)
  measure_uuid: string;
  @IsNumber()
  confirmed_value: number;
}
