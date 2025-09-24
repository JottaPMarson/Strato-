import { Body, Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('login')
  login(@Body() body: { email: string; password: string }) {
    const { email, password } = body ?? { email: '', password: '' };
    const ok = email === 'admin@stratopj.com' && password === '123456';
    return ok
      ? { token: 'demo-token', user: { email } }
      : { error: 'invalid_credentials' };
  }
}



