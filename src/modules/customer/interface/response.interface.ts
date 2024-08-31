export interface MeasuresResponse {
  customer_code: string;
  measures: Measures[];
}

export interface Measures {
  measure_uuid: string;
  measure_datetime: Date;
  measure_type: string;
  has_confirmed: boolean;
  image_url: string;
}
