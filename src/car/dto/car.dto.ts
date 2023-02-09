import { IsNotEmpty, IsNumber, IsString, Max, MaxLength, Min, MinLength } from 'class-validator';

export class CreateCarDto {
  @IsNotEmpty()
  @Min(0)
  @Max(99)
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsString()
  @MinLength(2, {
    message: 'Name is too short',
  })
  @MaxLength(50, {
    message: 'Name is too long',
  })
  name: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(1, {
    message: 'Company is too short',
  })
  @MaxLength(550, {
    message: 'Company is too long',
  })
  company: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(1, {
    message: 'Type Of Car is too short',
  })
  @MaxLength(9999, {
    message: 'Type Of Car is too long',
  })
  typeOfCar: string;
}

export class UpdateCarDto {
  @Min(0)
  @Max(999999)
  @IsNumber()
  price?: number;

  @Min(1)
  @Max(200)
  @IsString()
  name?: string;

  @Min(1)
  @Max(200)
  @IsString()
  company?: string;

  @Min(1)
  @Max(200)
  @IsString()
  typeOfCar?: string;
}
