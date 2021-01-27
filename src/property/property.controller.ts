import { Controller, Get, Post, Body, Param, Put } from "@nestjs/common";
import { Property } from "./property.entity";
import { PropertyService } from "./property.service";

import { day, year } from './../utils/timeStamps';

@Controller('property')
export class PropertyController {
    constructor(private readonly propertyService: PropertyService) { }

    @Get()
    async findAll(): Promise<Property[]> {
        return this.propertyService.findAll();
    }

    @Get('operated')
    async findPropertyToBeOperated(): Promise<Property[]> {
        return this.propertyService.needToBeOperated();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Property> {
        return this.propertyService.findOne(id);
    }

    @Post()
    async save(@Body() property: Property) {
        return this.propertyService.save(property);
    }

    @Put()
    async update() {
        // let propertyExample = new Property();

        const property: any = {
            typeId: 3,
            holderId: 1,
            title: '222',
            invNumber: 1,
            quantity: 1,
            dateCome: new Date(Date.now()),
            dateCheck: new Date(Date.now()),
            timeToLive: new Date(Date.now())
        };

        return this.propertyService.update(property, 2);
    }
}