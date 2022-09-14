import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductModule } from './product/product.module';
import { ConfigModule } from '@nestjs/config';
import {DBconfig} from './database/config.js'

@Module({
  imports: [ConfigModule.forRoot({isGlobal:true}),
            SequelizeModule.forRoot({
              dialect: "mysql",
              username: process.env.DB_USER,
              password: process.env.DB_PASS,
              database: process.env.DB_NAME,
              host: process.env.DB_HOST,
              port: 3306,
              autoLoadModels: true,
              synchronize: true,
            }),
            UserModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
