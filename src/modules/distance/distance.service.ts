import { Injectable } from "@nestjs/common";
import { Position } from "src/database/entities/position.entity";
import { Property } from "src/database/entities/property.entity";
import { Station } from "src/database/entities/station.entity";
import { DeleteResult, getManager, UpdateResult } from "typeorm";
import { StationDataDto } from "./station-data.dto";

@Injectable()
export class DistanceService {
    private readonly manager = getManager();

    async getStations(): Promise<Station[]> {
        return await this.manager.find(Station, { relations: ["worker", "phone", "department"] });
    }

    async getWorkerPosition(id: number): Promise<Position> {
        const position = await this.manager.findOne(Position, { where: { id: id } });
        return position;
    }

    async getPropertyCount(id: number): Promise<number> {
        const result = await this.manager.count(Property, { where: { stationId: id } });
        console.log(result);
        return result;
    }

    async getSingleStation(id: number): Promise<Station> {
        return await this.manager.findOne(Station, { id: id });
    }

    async addStation(stationData: StationDataDto): Promise<StationDataDto> {
        return await this.manager.save(Object.assign(new Station(), stationData));
    }

    async editStation(id: number, stationData: StationDataDto): Promise<UpdateResult> {
        return await this.manager.update(Station, id, stationData);
    }

    async deleteStation(id: number): Promise<DeleteResult> {
        return await this.manager.delete(Station, id);
    }
}