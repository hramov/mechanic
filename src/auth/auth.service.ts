import { Injectable } from "@nestjs/common";
import { getManager } from "typeorm";
import { LoginDataDto, RegisterDataDto } from "./authData.dto";

import { Auth } from './entities/auth.entity';

@Injectable()
export class AuthService {

    private readonly manager = getManager();

    async login(loginData: LoginDataDto) {
        return await this.manager.findOne(Auth, { login: loginData.login, password: new Buffer(loginData.password).toString('base64') });
    }

    async register(registerData: RegisterDataDto) {
        return await this.manager.save(Object.assign(new Auth(), registerData));
    }
}