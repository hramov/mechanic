import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Property } from './property/property.entity';
import { PropertyService } from './property/property.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/')
  getHello(): Promise<Property[]> {
    return this.appService.getHello();
  }
}
