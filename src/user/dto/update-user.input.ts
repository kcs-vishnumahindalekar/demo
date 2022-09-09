import { CreateUserInput } from './create-user.input';
import { PartialType } from '@nestjs/mapped-types';
import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, MinLength, IsEmail, IsEnum } from 'class-validator';

enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field()
  id: number;
  
  @IsNotEmpty()
  @Field()
  firstName?: string;

  @IsNotEmpty()
  @Field()
  lastName?: string;

  @IsNotEmpty()
  @IsEmail()
  @Field()
  email?: string;

  @IsNotEmpty()
  @MinLength(6)
  @Field()
  password?: string;
  
  @IsNotEmpty()
  @IsEnum(Gender, {
    message: 'gender must be either male or female',
  })
  @Field()
  gender?: string;
  
  
}
