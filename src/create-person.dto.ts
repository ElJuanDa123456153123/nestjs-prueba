import { IsString, IsInt, MinLength, Min, IsEnum } from 'class-validator';
import { Genero } from './person.models';

export class CreatePersonDto {
  @IsString({ message: 'El nombre debe ser texto' })
  @MinLength(3, { message: 'El nombre debe tener al menos 3 caracteres' })
  name: string;

  @IsInt({ message: 'La edad debe ser un número entero' })
  @Min(10, { message: 'La edad no puede ser negativa' })
  age: number;

  @IsEnum(Genero, { message: 'El género debe ser masculino, femenino u otro' })
  genero: Genero;
}