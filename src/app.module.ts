import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config'; 
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { ProductModule } from './modules/product/product.module';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './modules/auth/constants';
@Module({
  imports: [
    ConfigModule.forRoot(),
    JwtModule.register({ secret: jwtConstants.secret }),
    DatabaseModule,
    AuthModule,
    UserModule,
    ProductModule,
     

  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
