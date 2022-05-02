import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Controller('auth')
export class AuthController {
  constructor(private readonly jwtService: JwtService) {}

  @Post()
  login(@Body() body: any) {
    if (body.username === 'admin' && body.password === 'geheim') {
      const user = { username: 'admin', password: 'geheim' };
      delete user.password;

      return this.jwtService.sign(user);
    } else {
      throw new UnauthorizedException();
    }
  }
}
