import { Body, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/users/user.schema';
// import * as bcrypt from 'bcrypt'
@Injectable()
export class UsersService {

    constructor(@InjectModel(User.name) private userModel: Model<User>) {}
//, private _jwtService:JwtService
    async getAllUserss(){
        let users = await this.userModel.find({})
        return (users)
    }

    async get(){
        let users = await this.userModel.find({})
        return (users)
    }

    async signup(body:any){
        let exist = await this.userModel.findOne({email:body.email})
        if(exist) throw new HttpException('user is already exist!',409);
       
       // const hash = bcrypt.hashSync(password,8);
      //body.password = hash
        await this.userModel.insertMany(body)
        return "sucess sign up!";
    }
/*
    async signin(body:any){
      let exist = await this.userModel.findOne({email:body.email})
      if(!(exist&&bcrypt.compareSync(body.password,exist.password))) throw new HttpException('incorrect email or password',Http.unto);  
    }

*/
    }
