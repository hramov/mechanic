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
        return await this.manager.findOne(Auth, { where: { login: loginData.login, password: new Buffer(loginData.password).toString('base64') }, relations: ["position", "department"] });
    }

    async register(registerData: RegisterDataDto) {
        const reg = Object.assign(new Auth(), registerData);
        reg.departmentId = registerData.departmentId;
        reg.positionId = registerData.positionId;
        console.log(reg);
        return await this.manager.save(Auth, reg);
    }
}