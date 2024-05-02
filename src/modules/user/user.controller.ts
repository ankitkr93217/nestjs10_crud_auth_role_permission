import { Body, Controller,Get,Post, UseGuards } from '@nestjs/common';
import { Observable } from 'rxjs';
import { User } from './user.interface';
import { UserService } from './user.service';
import { Role } from '../auth/role';
import { hasRole } from 'src/decorator/hasRole.decorator';
import { RoleGuard } from 'src/guard/role.guard';
import { AuthGuard } from 'src/guard/auth.guard';

@Controller('user')
export class UserController {

    constructor(private UserService:UserService)
    {}

    @Get('/getUser')
    @UseGuards(AuthGuard,RoleGuard)
    @hasRole(Role.ADMIN)
    index():Observable<User[]>{
        let data=this.UserService.getUser();
        // console.log('tttttttttttttttttttt');
        // console.log(data);
        return data;
    }
    
    // @Get('/getUser')
    // async GetAll(): Promise<User[]> {
    //     let data=this.UserService.getUser();
    //     console.log(data);
    //     return data;
    // }

    @Post('/userExist')
    userExist(@Body('username') username:string):Observable<User[]>{
        let data=this.UserService.userExist(username);
        // console.log('tttttttttttttttttttt');
        // console.log(data);
        return data;
    }

}
