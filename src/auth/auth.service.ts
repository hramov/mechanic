import { Injectable } from "@nestjs/common";
import { getManager } from "typeorm";
import { LoginDataDto, RegisterDataDto } from "./authData.dto";

import { Auth } from './../database/entities/auth.entity';

@Injectable()
export class AuthService {

    private readonly manager = getManager();

    async getUsers(): Promise<Auth[]> {
        const users = await this.manager.find(Auth, { relations: ["position", "department"] });
        return users;
    }

    async login(loginData: LoginDataDto) {
        return await this.manager.findOne(Auth, { login: loginData.login, password: new Buffer(loginData.password).toString('base64') });
    }

    async register(registerData: RegisterDataDto) {
        return await this.manager.save(Object.assign(new Auth(), {
            positionId: Number(1),
            departmentId: 1,
            name: '12345',
            lastName: '123',
            otherName: '123',
            login: '123',
            password: new Buffer('123').toString('base64'),
            phone: '123'
        }));
    }
}