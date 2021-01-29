import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Property } from './entities/property.entity';
import { Station } from './entities/station.entity';
import { Auth } from './entities/auth.entity';
import { Department } from './entities/department.entity';
import { Position } from './entities/position.entity';
import { Device } from './entities/device.entity';
import { PhoneBook } from './entities/phoneBook.entity';

@Module({
    imports: [TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'mechanic',
        entities: [Property, Station, Auth, Position, Department, Device, PhoneBook],
        synchronize: true,
    }),
    ]
})
export class DatabaseModule { }
