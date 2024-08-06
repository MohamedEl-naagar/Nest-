import { IsNumber, IsOptional, IsString , IsStrongPassword, Min, MinLength, minLength } from "class-validator";






export class SignupDto {
    
    @IsString()
    @MinLength(2)
    // @IsOptional()
    name:string;

    @IsString()
    @MinLength(2)
    email:string;
    
    @IsStrongPassword()
    password:string;
}