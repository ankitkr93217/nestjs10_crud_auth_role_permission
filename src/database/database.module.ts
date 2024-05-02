import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';
import { TypeOrmModule } from '@nestjs/typeorm';
import {UserEntity} from "./../modules/user/user.entity";
 
@Module({
  imports:[ 
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nest_crud_api',
      entities: [
        UserEntity,
        __dirname + '/../**/*.entity.js',
      ],
      synchronize: true,
    })],
    providers: [...databaseProviders],
    exports: [...databaseProviders],
  })
export class DatabaseModule {}
// docker run --name some-mysql -e MYSQL_ROOT_PASSWORD=root -p 3333:3306 -d mysql:latest