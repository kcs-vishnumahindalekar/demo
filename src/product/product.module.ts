import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductResolver } from './product.resolver';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from 'src/schemas/product.schema';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports:[SequelizeModule.forFeature([Product]),
  GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: true,
    include: [ProductModule],
    path: "products/graphql",
    context: ({ req }) => ({
      request: req
    })
  }),],
  providers: [ProductResolver, ProductService]
})
export class ProductModule {}
