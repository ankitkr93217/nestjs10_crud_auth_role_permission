import { Module } from '@nestjs/common';
 
import { AuthService } from './auth.service';
 import { UserModule } from '../user/user.module';
 import { jwtConstants } from './constants';

@Module({
    imports:[
        UserModule,AuthModule
    ],
     providers: [AuthService],
})

export class AuthModule {
   


}
