import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PersonModel } from './person.models';
import { AppService } from './app.service';

@Controller('personController')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @Get('getAll')
  getAll() {
    return this.appService.getAll();
  }

  @Get()
  miMetodo() {
    return { id: 1, name: 'David', age: 30 };
  }

  @Post('saveBody')
  savePerson(@Body() data1: any) {
    console.log('************');
    console.log(data1);
    console.log('************');
    return {
      message: 'Se guardó correctamente',
    };
  }

  @Get('age')
  getAge() {
    return { age: 30 };
  }

  @Get('getJuan')
  getAgeJuan() {
    const data = new PersonModel();
    data.id = 1;
    data.name = 'Juan';
    data.age = 25;
    return data;
  }

  @Get('findOne/:id')
  findOne(@Param('id') id: number) {
    return this.appService.findOne(id);
  }

  @Post('create')
  create(@Body() data: PersonModel) {
    return this.appService.create(data);
  }

  @Put('update/:id')
  update(@Param('id') id: number, @Body() data: PersonModel) {
    return this.appService.update(id, data);
  }

  @Delete('remove/:id')
  remove(@Param('id') id: number) {
    return this.appService.remove(id);
  }
}

//crear un crud  crear, ver eliminar, actualizar
