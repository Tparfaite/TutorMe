import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuardGuard implements CanActivate {

  constructor(private readonly jwtService:JwtService){}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

  try {
    const request = context.switchToHttp().getRequest()
    console.log("request",request.headers)

    const  token = request.headers.authorization?.split(' ')[1]
    console.log("token",token)
    
    if(!token){
      throw new UnauthorizedException('unauthorized! Invalid token')
    }
  
    const decoded = this.jwtService.verify(token, {secret:process.env.JWT_SECRET});
    console.log("decoded",decoded)
    if(!decoded){
      throw new UnauthorizedException('unauthorized')
    }
    request.user=decoded
    return true;
  } catch (error){
    throw new UnauthorizedException('unauthorized')
  }
 
  }
}
