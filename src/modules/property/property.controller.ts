import { Controller, Get, Post, Body, Param, Put } from "@nestjs/common";
import { Property } from './../../database/entities/property.entity';
import { PropertyService } from "./property.service";

@Controller('property')
export class PropertyController {
    constructor(private readonly propertyService: PropertyService) { }

    @Get()
    async findAll(): Promise<Property[]> {
        const result = await this.propertyService.findAll();

        return result;
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

    @Put(':id')
    async update(@Param('id') id: number, @Body() property: any) {
        return this.propertyService.update(property, id);
    }
}