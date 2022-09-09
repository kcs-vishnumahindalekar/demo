import { ObjectType, Field } from "@nestjs/graphql";
import { Product } from "../../product/entities/product.entity";

@ObjectType({isAbstract:true})
export class User {
    @Field({ nullable: true })
    id: number;

    @Field()
    firstName?: string;

    @Field()
    lastName?: string;

    @Field()
    email?:string;

    @Field()
    password?:string;

    @Field()
    gender?:string;

    @Field()
    productId?:number;

    @Field(()=>Product,{nullable:true})
    product?:Product | null

}
