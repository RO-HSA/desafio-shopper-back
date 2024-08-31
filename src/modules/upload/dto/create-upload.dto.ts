import { IsBase64, IsEnum, IsString } from 'class-validator';
import { ToUpperCase } from '../transformers/to-upper-case.transformer';

export class CreateUploadDto {
  @IsBase64()
  image: string;
  @IsString()
  customer_code: string;
  @IsString()
  measure_datetime: string;
  @IsEnum(['WATER', 'GAS'])
  @ToUpperCase()
  measure_type: 'WATER' | 'GAS';
}
