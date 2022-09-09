import {  Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from 'src/schemas/product.schema';
import { User } from 'src/schemas/user.schema';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UserService {

  constructor(@InjectModel(User) private readonly userModel:typeof User){}

  async create(createUserInput: CreateUserInput) {
    const user = await this.userModel.create({
      firstName:createUserInput.firstName,
      lastName:createUserInput.lastName,
      email:createUserInput.email,
      password:createUserInput.password,
      gender:createUserInput.gender,
      productId:createUserInput.productId
    })
    return user;
  }

   findAll() {
    return  this.userModel.findAll({include: [{ model: Product }]});
  }

  findOne(id: number) {
    return this.userModel.findOne({where:{id},include: [{ model: Product }]});
  }

  async update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    const user = await this.userModel.destroy({where:{id}});
    return user
  }
}
