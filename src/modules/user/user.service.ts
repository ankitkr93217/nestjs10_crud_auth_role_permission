import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {UserEntity} from './user.entity';
import { Observable,from } from 'rxjs';
import {User} from './user.interface';
 

 

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserEntity) private user_rep: Repository<UserEntity>,
        // @InjectDataSource() private dataSource: DataSource,
      ) {}

    getUser():Observable<User[]>{
      return from(this.user_rep.find());
    }

    // async getUser(): Promise<User[]> {
    //   return await this.user_rep.find();
    // }

    userExist(username:string):Observable<User[]>{
 
      return from(this.user_rep.find({

         where: { username:username } 
        
        }));
    }

    
  





}
