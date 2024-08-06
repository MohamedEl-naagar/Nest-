import { Controller, Delete, Get, Post } from '@nestjs/common';
import {AppService} from './app.service'

@Controller()
export class AppController {

  constructor(private _AppService : AppService){}


  @Get()
  getTest(){
    return this._AppService.getHello();
  }

}
