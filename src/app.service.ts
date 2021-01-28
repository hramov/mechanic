import { Injectable } from '@nestjs/common';
import { PropertyService } from './modules/property/property.service';

@Injectable()
export class AppService {

  constructor(private readonly propertyService: PropertyService) { }

  getHello() {
    return this.propertyService.findAll()
  }


}
