import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/schemas/user.schema';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [SequelizeModule.forFeature([User]),
            GraphQLModule.forRoot<ApolloDriverConfig>({
              driver: ApolloDriver,
              autoSchemaFile: true,
              include: [UserModule],
              path: "user/graphql",
              context: ({ req }) => ({
                request: req
              })
            }),],
  providers: [UserResolver, UserService]
})
export class UserModule {}
