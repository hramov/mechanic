import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropertyController } from './property.controller';
import { Property } from './../../database/entities/property.entity';
import { PropertyService } from './property.service';

@Module({
    imports: [TypeOrmModule.forFeature([Property])],
    providers: [PropertyService],
    controllers: [PropertyController],
    exports: [PropertyService]
})
export class PropertyModule { }
