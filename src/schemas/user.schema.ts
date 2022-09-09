import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import {Product} from './product.schema'

@Table
export class User extends Model {
  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  email:string
  
  @Column
  password: string;

  @Column
  gender: string;

  @ForeignKey(()=>Product)
  @Column
  productId: number;

  @BelongsTo(() => Product)
  product: Product;
}