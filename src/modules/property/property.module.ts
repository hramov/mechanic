import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropertyController } from './property.controller';
import { Property } from './../../database/entities/property.entity';
import { PropertyService } from './property.service';
import { DistanceService } from '../distance/distance.service';

@Module({
    imports: [TypeOrmModule.forFeature([Property]), DistanceService],
    providers: [PropertyService, DistanceService],
    controllers: [PropertyController],
    exports: [PropertyService]
})
export class PropertyModule { }
