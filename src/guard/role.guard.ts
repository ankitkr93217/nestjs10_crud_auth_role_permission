import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RoleGuard implements CanActivate {


  constructor(private readonly reflector: Reflector) {
  }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // return true;
    const roles = this.reflector.get<string[]>('roles', context.getHandler());

    const permissions = this.reflector.get<string[]>('permissions', context.getHandler());

    if (!roles) {
      return false;
    }
    console.log('congratulations,hit Role guard');

    // if (!permissions) {
    //   return false;
    // }

    const request = context.switchToHttp().getRequest();
    const user = request.user;//??? // THIS is what is missing

    return roles.some((role) => {
      return role === user.role;
    });





  }
}
