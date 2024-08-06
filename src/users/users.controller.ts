import { Body, Controller, Get , Param, Post, Query, ValidationPipe } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/schemas/user.schema';
import { Model } from 'mongoose';
import { SignupDto } from './dto/signup.dto';

@Controller('users')
export class UsersController {

    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    @Post('signup/:id')
    async signup(@Body(new ValidationPipe()) body: SignupDto, @Param('id') id: string, @Query() query: any) {
        await this.userModel.insertMany(body);
        return { message: 'User signed up successfully', id, query };
    }

    // Uncomment and use the following methods as needed

    // @Post("s2/:id")
    // async s(@Request() req: any) {
    //     return { body: req.body, param: req.params, query: req.query };
    // }

    // @Get()
    // async getAllUsers() {
    //     return this.userModel.find().exec();
    // }
}
