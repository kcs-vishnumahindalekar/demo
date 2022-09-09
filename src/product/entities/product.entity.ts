import { ObjectType, Field } from "@nestjs/graphql";

@ObjectType({isAbstract:true})
export class Product {
    @Field({nullable:true})
    id:number;

    @Field()
    name:string;

}
