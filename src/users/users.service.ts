import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    GetAllUsers(){
        return {message:"sucess",users:[
            {
                name:"mohamed"
            }
            ,{
                name:"ali"
            },{
                name:"elnagar"
            }
        ]}
    }
}
