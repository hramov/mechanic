import { Injectable } from "@nestjs/common";
import { Position } from "src/database/entities/position.entity";
import { Station } from "src/database/entities/station.entity";
import { DeleteResult, getManager, UpdateResult } from "typeorm";

@Injectable()
export class DistanceService {
    private readonly manager = getManager();

    async getStations(): Promise<Station[]> {
        return await this.manager.find(Station, { relations: ["worker", "phone", "department"] });
    }

    async getWorkerPosition(id: number): Promise<Position> {
        return await this.manager.findOne(Position, { where: { id: id } });
    }

    async getSingleStation(id: number): Promise<Station> {
        return await this.manager.findOne(Station, { where: { id: id } });
    }

    async addStation(stationData: Station): Promise<Station> {
        return await this.manager.save(Object.assign(new Station(), stationData));
    }

    async editStation(id: number, stationData: Station): Promise<UpdateResult> {
        return await this.manager.update(Station, id, stationData);
    }

    async deleteStation(id: number): Promise<DeleteResult> {
        return await this.manager.delete(Station, id);
    }
}