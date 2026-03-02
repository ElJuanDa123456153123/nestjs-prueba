import { Injectable } from '@nestjs/common';
import { PersonModel } from './person.models';

@Injectable()
export class AppService {
  database: PersonModel[] = [
    { id: 1, name: 'David', age: 30 },
    { id: 2, name: 'Juan', age: 25 },
    { id: 3, name: 'Maria', age: 28 },
  ];
  getHello(): string {
    return 'Hello World desde Service!';
  }

  private persons: PersonModel[] = [];
  private idCounter = 4;

  create(person: PersonModel) {
    person.id = this.idCounter++;
    this.database.push(person);
    return person;
  }

  getAll() {
    return this.database;
  }

  findOne(id: number) {
    return this.database.find(p => p.id == id);
  }

  update(id: number, data: PersonModel) {
    const person = this.findOne(id);
    if (person) {
      person.name = data.name;
      person.age = data.age;
      return person;
    }
    return null;
  }

  remove(id: number) {
    const index = this.database.findIndex(p => p.id === Number(id));
    if (index !== -1) {
      this.database.splice(index, 1);
      return { message: 'Eliminado correctamente' };
    }
    return { message: 'No encontrado' };
  }
}
