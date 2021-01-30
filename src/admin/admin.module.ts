import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from 'src/auth/auth.service';
import { Auth } from 'src/database/entities/auth.entity';
import { Department } from 'src/database/entities/department.entity';
import { Device } from 'src/database/entities/device.entity';
import { Position } from 'src/database/entities/position.entity';
import { Property } from 'src/database/entities/property.entity';
import { Station } from 'src/database/entities/station.entity';
import { DistanceService } from 'src/modules/distance/distance.service';
import { PropertyService } from 'src/modules/property/property.service';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';

@Module({
    imports: [TypeOrmModule.forFeature([Station, Property, Auth, Department, Position, Device]),
        DistanceService, PropertyService, AuthService],
    controllers: [AdminController],
    providers: [AdminService, DistanceService, PropertyService, AuthService],
    exports: []
})
export class AdminModule { }
