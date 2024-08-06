import { Injectable } from '@nestjs/common';

@Injectable()
export class OrdersService {

    getAllOrders(){
        return {message:"sucess",orders:[
            {
                name:"order1"
            },
            {
                name:"order2"
            }
        ]}
    }
}
