import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}
  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if (!token) throw new UnauthorizedException()
    try {
     await this.jwtService.verify(token);
   
    } catch {
      throw new UnauthorizedException()
    }
    return true
  }

  private extractTokenFromHeader(req: Request) : string | undefined {
   // const token = req.headers.auth
    //return token
    return undefined
  }
}
