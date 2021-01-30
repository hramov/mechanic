import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { Auth } from 'src/database/entities/auth.entity';
import { Department } from 'src/database/entities/department.entity';
import { Device } from 'src/database/entities/device.entity';
import { Position } from 'src/database/entities/position.entity';
import { Property } from 'src/database/entities/property.entity';
import { Station } from 'src/database/entities/station.entity';
import { DistanceService } from 'src/modules/distance/distance.service';
import { PropertyService } from 'src/modules/property/property.service';
import { DeleteResult, UpdateResult } from 'typeorm';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
    constructor(private readonly adminService: AdminService,
        private readonly distanceService: DistanceService,
        private readonly propertyService: PropertyService,
        private readonly authService: AuthService) { }


    // Admin module

    @Get('position')
    async getPositions(): Promise<Position[]> {
        return await this.adminService.getPositions();
    }

    @Get('department')
    async getDepartments(): Promise<Department[]> {
        return await this.adminService.getDepartments();
    }

    @Get('device')
    async getDevices(): Promise<Device[]> {
        return await this.adminService.getDevices();
    }

    // Distance module

    @Get('distance')
    async getStations(): Promise<Station[]> {
        return await this.distanceService.getStations();
    }

    @Post('distance')
    async createStation(@Body() stationData: Station): Promise<Station> {
        return await this.distanceService.addStation(stationData);
    }
    @Put('distance')
    async editStation(@Param('id') id: number, @Body() stationData: Station): Promise<UpdateResult> {
        return await this.distanceService.editStation(id, stationData);
    }
    @Delete('distance')
    async deleteStation(@Param('id') id: number): Promise<DeleteResult> {
        return await this.distanceService.deleteStation(id);
    }

    // Property module

    @Get('property')
    async getProperty(): Promise<Property[]> {
        return await this.propertyService.getProperty();
    }

    @Post('property')
    async createProperty(@Body() propertyData: Property): Promise<Property> {
        return await this.propertyService.saveProperty(propertyData);
    }
    @Put('property')
    async editProperty(@Param('id') id: number, @Body() propertyData: Property): Promise<UpdateResult> {
        return await this.propertyService.updateProperty(propertyData, id);
    }
    @Delete('property')
    async deleteProperty(@Param('id') id: number): Promise<DeleteResult> {
        return await this.propertyService.deleteProperty(id);
    }

    // Auth module
    @Get('employee')
    async getEmployees(): Promise<Auth[]> {
        return await this.authService.getUsers();
    }

    @Post('employee')
    async createEmployee(@Body() registerData: Auth): Promise<Auth> {
        return await this.authService.register(registerData);
    }

    // @Put()
    // async editEmployee(@Param('id') id: number, @Body() employeeData: Auth): Promise<UpdateResult> {
    //     return await this.authService.
    // }

    // @Delete()
    // async deleteProperty(@Param('id') id: number): Promise<DeleteResult> {
    //     return await this.propertyService.deleteProperty(id);
    // }
}
