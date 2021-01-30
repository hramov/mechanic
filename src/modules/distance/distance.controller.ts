import { Controller, Get, Post, Body, Param, Put, Delete } from "@nestjs/common";
import { StationDataDto } from "./station-data.dto";
import { DistanceService } from './distance.service';
import { DeleteResult } from "typeorm";
import { PropertyService } from "../property/property.service";

@Controller('distance')
export class DistanceController {

    constructor(private readonly distanceService: DistanceService,
        private readonly propertyService: PropertyService) { }

    @Get()
    async getStations() {
        const stations = await this.distanceService.getStations();
        for (let i = 0; i < stations.length; i++) {
            stations[i].worker.position = await this.distanceService.getWorkerPosition(stations[i].worker.positionId);
            stations[i].propertyCount = await this.propertyService.getPropertyForSingleStationCount(stations[i].id);
        }
        return stations;
    }

    @Get('station/:id')
    async getSingleStation(@Param('id') id: number) {
        const station = await this.distanceService.getSingleStation(id);
        station.property = await this.propertyService.getPropertyForSingleStation(station.id);
        return station;
    }

    // @Post('station')
    // async addStation(@Body() stationData: StationDataDto) {
    //     return await this.distanceService.addStation(stationData);
    // }

    // @Put('station/:id')
    // async editStation(@Param() id: number, @Body() stationData: StationDataDto) {
    //     return await this.distanceService.editStation(id, stationData);
    // }

    // @Delete(':id')
    // async deleteStation(@Param() id: number): Promise<DeleteResult> {
    //     return await this.distanceService.deleteStation(id);
    // }
}