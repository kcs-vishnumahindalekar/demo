import { CreateProductInput } from './create-product.input';
import { PartialType } from '@nestjs/mapped-types';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateProductInput extends PartialType(CreateProductInput) {
  @Field()
  id: number;

  @Field()
  name?: string;

  
}
