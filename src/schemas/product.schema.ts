import { Table, Column, Model , HasMany } from 'sequelize-typescript';
import { User } from './user.schema';

@Table
export class Product extends Model {
  @Column
  name: string;

  @HasMany(()=> User)
  user:User[]
}