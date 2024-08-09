import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/users/user.schema';

@Module({
    imports:[MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
    providers: [AuthService,JwtService],
    controllers: [AuthController],

})
export class AuthModule {}
