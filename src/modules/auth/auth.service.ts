import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable,from } from 'rxjs';
import { User } from '../user/user.interface';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {

    constructor(
        private readonly jwtService: JwtService, private readonly UserService: UserService
    ) {}

    // validateUserCredential(username:string,password:string):Observable<User[]>{
    //     this.UserService.userExist(username);
    // }


}
