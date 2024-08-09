import { Body, HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/users/user.schema';
import * as bcrypt from 'bcrypt';
import { SigninDto } from './dto/signin.dto';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<User>,private JwtService:JwtService) {}

  async signup(body:SigninDto) {
    let userExist = await this.userModel.findOne({email:body.email})
    if(userExist) throw new HttpException("user is already exist",409) ;
    const hash = bcrypt.hashSync(body.password, 5);
    body.password = hash
    return await this.userModel.insertMany(body)
  }

  async signin(body:SigninDto) {
  let userExist = await this.userModel.findOne({email:body.email})
  if(!(userExist&&bcrypt.compareSync(body.password,userExist.password)))throw new HttpException("incorrect email or password",409) ;
  let token= await this.JwtService.sign({name:userExist.name},{secret:"nest"})
  return {token}
}

async profile(){
  let users = await this.userModel.find({})
  return users
}
// const payload = { sub: user.userId, username: user.username };
}
