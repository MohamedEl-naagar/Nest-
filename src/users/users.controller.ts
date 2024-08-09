import { Body, Controller, Get , Param, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/users/user.schema';
import { Model } from 'mongoose';
import { UsersService } from './users.service';

@Controller('users')

// @UsePipes(new ValidationPipe({whitelist:true,forbidNonWhitelisted:true}))

export class UsersController {

    constructor(private  _UsersService:UsersService){}

    @Post()
     signup(@Body() body:any){
        return this._UsersService.signup(body)
    }

    @Get("print")
    async getAllUsers(){
        let users  = await this._UsersService.getAllUserss();
        return {message:"Hello",users};
    }

}
