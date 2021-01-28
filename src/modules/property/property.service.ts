import { Injectable } from "@nestjs/common";
import { getManager, Between } from "typeorm";
import { Property } from "./property.entity";

import { day } from './../../utils/timeStamps';

@Injectable()
export class PropertyService {

    private readonly manager = getManager();
    private readonly nowMs = Date.now();

    // Utilities workers

    private objectMerger(target: Property): Property {
        return Object.assign(new Property(), target);
    }

    // Service workers

    public async findAll(): Promise<Property[]> {
        const data = await this.manager.find(Property);
        console.log(data);
        return data;
    }

    public async findOne(id: number): Promise<Property> {
        return await this.manager.findOne(Property, id);
    }

    public async save(property: Property): Promise<Property> {
        return await this.manager.save(this.objectMerger(property));
    }

    public async update(property: any, id: number): Promise<any> {
        return this.manager.update(Property, id, this.objectMerger(property));
    }

    public async needToBeOperated(): Promise<Property[]> {
        const data = this.manager.find(Property,
            {
                where:
                {
                    dateCheck: Between(new Date(this.nowMs), new Date(this.nowMs + 7 * day),)
                }
            })
        console.log(data);
        return data;
    }
}