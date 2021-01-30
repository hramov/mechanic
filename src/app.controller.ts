import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Property } from './database/entities/property.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/')
  getHello(): string {
    return "123";
  }
}
