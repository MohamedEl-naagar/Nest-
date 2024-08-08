import { Body, Controller, Get ,Post} from '@nestjs/common';
import { SignupDto } from './dto/signup.dto';

@Controller('auth')
export class AuthController {

   @Post()
   signup(@Body() body :SignupDto){
        return {message:"signup"}
   }

}
