import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

export class CreatePersonDto {
  id?: number;
  name: string;
  age: number;
  gender: string;
}

@Injectable()
export class PersonValidationPipe implements PipeTransform {
  transform(value: any) {
    const errors: string[] = [];

    // Validar nombre: debe ser string y tener al menos 3 caracteres
    if (value.name === undefined || value.name === null) {
      errors.push('El campo name es obligatorio');
    } else if (typeof value.name !== 'string') {
      errors.push('El campo name debe ser un string');
    } else if (value.name.trim().length < 3) {
      errors.push('El campo name debe tener al menos 3 caracteres');
    }

    // Validar género: debe ser 'masculino' o 'femenino'
    if (value.gender === undefined || value.gender === null) {
      errors.push('El campo gender es obligatorio');
    } else if (typeof value.gender !== 'string') {
      errors.push('El campo gender debe ser un string');
    } else if (!['masculino', 'femenino'].includes(value.gender.toLowerCase())) {
      errors.push('El campo gender solo acepta: masculino o femenino');
    }

    // Validar edad: debe ser un entero
    if (value.age === undefined || value.age === null) {
      errors.push('El campo age es obligatorio');
    } else if (typeof value.age !== 'number' || !Number.isInteger(value.age)) {
      errors.push('El campo age debe ser un número entero');
    } else if (value.age < 0) {
      errors.push('El campo age debe ser un número positivo');
    }

    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }

    return value as CreatePersonDto;
  }
}
