import { Body, Controller, Get ,Post, UseGuards, UsePipes, ValidationPipe} from '@nestjs/common';
import { SignupDto } from './dto/signup.dto';
import { SigninDto } from './dto/signin.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@Controller('auth')
@UsePipes(new ValidationPipe({whitelist:true,forbidNonWhitelisted:true}))
export class AuthController {
     constructor(private _AuthService:AuthService){}
   @Post('signup')
   signup(@Body() body :SignupDto){
        return this._AuthService.signup(body)
   }
   @Post('signin')
   signin(@Body() body :SigninDto){
        return this._AuthService.signin(body);
   }
   
   @Get('profile')
   @UseGuards(AuthGuard)
   profile(){
     return this._AuthService.profile();
   }
}
