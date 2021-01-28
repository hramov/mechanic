import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Property } from './../modules/property/property.entity';
import { Station } from '../auth/entities/station.entity';
import { Auth } from './../auth/entities/auth.entity';
import { Department } from './../auth/entities/department.entity';

@Module({
    imports: [TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'mechanic',
        entities: [Property, Station, Department, Auth],
        synchronize: true,
    }),
    ]
})
export class DatabaseModule { }
