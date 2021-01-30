import { Injectable } from "@nestjs/common";

@Injectable()
export class AdminService {
    constructor() { }

    public getHello(): string {
        return 'Hello World!';
    }
}