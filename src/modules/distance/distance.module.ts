import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auth } from 'src/database/entities/auth.entity';
import { Department } from 'src/database/entities/department.entity';
import { Device } from 'src/database/entities/device.entity';
import { Position } from 'src/database/entities/position.entity';
import { Property } from 'src/database/entities/property.entity';
import { Station } from 'src/database/entities/station.entity';
import { PropertyService } from '../property/property.service';
import { DistanceController } from './distance.controller';
import { DistanceService } from './distance.service';

@Module({
    imports: [TypeOrmModule.forFeature([Station, Auth, Position, Department, Device, Property]),
        PropertyService],
    controllers: [DistanceController],
    providers: [DistanceService, PropertyService],
    exports: [DistanceService]
})
export class DistanceModule { }
