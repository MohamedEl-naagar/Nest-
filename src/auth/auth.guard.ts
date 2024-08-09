import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    let { token } = request.headers;

    if (!token) {
      throw new UnauthorizedException();
    }

    try {
      const payload = await this._jwtService.verifyAsync(token, { secret: "nest" });
      request.user = payload;
      return true;
    } catch (error) {
      throw new UnauthorizedException();
    }
  }
}
