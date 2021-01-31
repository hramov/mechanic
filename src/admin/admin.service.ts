import { Injectable } from "@nestjs/common";
import { getManager } from "typeorm";

import { Department } from "src/database/entities/department.entity";
import { Position } from './../database/entities/position.entity';
import { Device } from "src/database/entities/device.entity";


@Injectable()
export class AdminService {

    private readonly manager = getManager();

    constructor() { }

    public async getPositions(): Promise<Position[]> {
        return await this.manager.find(Position);
    }

    public async getDepartments(): Promise<Department[]> {
        return await this.manager.find(Department);
    }

    public async getDevices(): Promise<Device[]> {
        return await this.manager.find(Device);
    }

    public async addDevice(deviceData: Device): Promise<Device> {
        return await this.manager.save(Object.assign(new Device(), deviceData));
    }
}