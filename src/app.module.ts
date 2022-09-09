import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductModule } from './product/product.module';

@Module({
  imports: [SequelizeModule.forRoot({
              dialect: 'mysql',
              host: 'localhost',
              port: 3306,
              username: 'root',
              password: '',
              database: 'test',
              autoLoadModels: true,
              synchronize: true,
            }),UserModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
