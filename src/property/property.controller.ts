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
    async update(@Body() property: any, @Param('id') id: number) {
        return this.propertyService.update(property, id);
    }
}