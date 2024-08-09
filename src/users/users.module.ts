import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/users/user.schema';
import { AuthController } from 'src/auth/auth.controller';
import { AuthService } from 'src/auth/auth.service';


@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
    controllers: [UsersController],
    providers: [UsersService]
})
export class UsersModule {


}
