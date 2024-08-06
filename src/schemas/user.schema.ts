import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";




@Schema({timestamps:true})

export class User{

    @Prop({lowercase:true,required:true})
    name:string

    @Prop({})
    email:string

    @Prop({required:true})
    password:string


}


export const UserSchema = SchemaFactory.createForClass(User)