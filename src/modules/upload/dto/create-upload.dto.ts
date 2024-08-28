import { IsBase64, IsEnum, IsString } from 'class-validator';

export class CreateUploadDto {
  @IsBase64()
  image: string;
  @IsString()
  customer_code: string;
  @IsString()
  measure_datetime: string;
  @IsEnum(['water', 'gas'])
  measure_type: 'water' | 'water';
}
