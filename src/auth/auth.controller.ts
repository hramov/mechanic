import { Controller, Get, Post, Body, Param, Put } from "@nestjs/common";
import { LoginDataDto, RegisterDataDto } from "./authData.dto";
import { AuthService } from './auth.service';
import { Auth } from './../database/entities/auth.entity';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Get()
    async getUsers() {
        return await this.authService.getUsers();
    }

    @Post('login')
    async login(@Body() loginData: LoginDataDto) {
        console.log(loginData);
        const user: Auth = await this.authService.login(loginData);
        if (!user) {
            return {
                status: 'Error',
                message: 'User not found'
            }
        }

        delete user.login;
        delete user.password;
        delete user.positionId;
        delete user.departmentId;

        return {
            token: Date.now(),
            user: user
        };
    }

    @Post('register')
    async register(@Body() registerData: RegisterDataDto) {
        registerData.password = Buffer.from(registerData.password).toString('base64').toString();
        return await this.authService.register(registerData);
    }

}