import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { StringifyOptions } from 'querystring';
import { CurrentUser } from './auth/decorators/current-user.decorator';
import { User } from './users/entities/user.entity';
import { IsPublic } from './auth/decorators/is-public.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @IsPublic
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('me')
  getMe(@CurrentUser() user: User) {
    return user;
  }
}
