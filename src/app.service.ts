import { Injectable } from '@nestjs/common';
import { PersonModel } from './person.models';

@Injectable()
export class AppService {
  database: PersonModel[] = [
    { id: 1, name: 'David el terian 2.0', age: 30, gender: 'masculino' },
    { id: 2, name: 'Mitico el terian', age: 25, gender: 'masculino' },
    { id: 3, name: 'Jhurguen', age: 28, gender: 'masculino' },
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
      person.gender = data.gender;
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
