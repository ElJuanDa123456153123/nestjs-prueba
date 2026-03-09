export enum Genero {
  MASCULINO = "masculino",
  FEMENINO = "femenino",
  OTRO = "otro"
}

export class PersonModel {
  id?: number;
  name: string;
  age: number;
  genero: Genero;
}