import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
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
        private readonly propertyService: PropertyService) { }

    // Distance module

    @Post()
    async createStation(@Body() stationData: Station): Promise<Station> {
        return await this.distanceService.addStation(stationData);
    }
    @Put()
    async editStation(@Param('id') id: number, @Body() stationData: Station): Promise<UpdateResult> {
        return await this.distanceService.editStation(id, stationData);
    }
    @Delete()
    async deleteStation(@Param('id') id: number): Promise<DeleteResult> {
        return await this.distanceService.deleteStation(id);
    }

    // Property module

    @Post()
    async createProperty(@Body() propertyData: Property): Promise<Property> {
        return await this.propertyService.saveProperty(propertyData);
    }
    @Put()
    async editProperty(@Param('id') id: number, @Body() propertyData: Property): Promise<UpdateResult> {
        return await this.propertyService.updateProperty(propertyData, id);
    }
    @Delete()
    async deleteProperty(@Param('id') id: number): Promise<DeleteResult> {
        return await this.propertyService.deleteProperty(id);
    }
}
