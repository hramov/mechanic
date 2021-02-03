import { Injectable } from "@nestjs/common";
import { getManager, Between, UpdateResult, DeleteResult } from "typeorm";
import { Property } from './../../database/entities/property.entity';

import { day } from './../../utils/timeStamps';

@Injectable()
export class PropertyService {

    private readonly manager = getManager();
    private readonly nowMs = Date.now();

    /** Classic CRUD methods */

    public async getProperty(): Promise<Property[]> {
        const data = await this.manager.find(Property, { relations: ["department", "station", "device"], order: { stationId: 'ASC' } });
        return data;
    }

    public async getSingleProperty(id: number): Promise<Property> {
        const result = await this.manager.findOne(Property, id, { relations: ["department", "station", "device"] });
        return result;
    }

    public async saveProperty(property: Property): Promise<Property> {
        return await this.manager.save(Object.assign(new Property(), property));
    }

    public async updateProperty(property: Property, id: number): Promise<UpdateResult> {
        return this.manager.update(Property, id,
            {
                title: property.title,
                deviceId: property.deviceId,
                departmentId: property.departmentId,
                description: property.description,
                stationId: property.stationId,
                location: property.location,
                invNumber: property.invNumber,
                quantity: property.quantity,
                dateCome: property.dateCome,
                dateCheck: property.dateCheck,
                timeToLive: property.timeToLive
            }
        );
    }

    public async deleteProperty(id: number): Promise<DeleteResult> {
        return await this.manager.delete(Property, id);
    }

    /** Methods for external modules */

    public async getPropertyForSingleStationCount(id: number): Promise<number> {
        const result = await this.manager.count(Property, { where: { stationId: id } });
        return result;
    }

    public async getPropertyForSingleStation(id: number): Promise<Property[]> {
        const result = await this.manager.find(Property, { where: { stationId: id }, relations: ["department", "station", "device"] });
        return result;
    }

    public async needToBeOperated(): Promise<Property[]> {
        return await this.manager.find(Property,
            {
                where:
                {
                    dateCheck: Between(new Date(this.nowMs), new Date(this.nowMs + 7 * day),)
                },
                relations: ["department", "station", "device"], order: { dateCheck: 'ASC' }
            })
    }
}