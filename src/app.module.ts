import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { PropertyModule } from './modules/property/property.module';
import { AuthModule } from './auth/auth.module';
import { DistanceModule } from './modules/distance/distance.module';
import { DocsModule } from './modules/docs/docs.module';
import { WorkModule } from './modules/work/work.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    DatabaseModule,
    PropertyModule,
    AuthModule,
    DistanceModule,
    DocsModule,
    WorkModule,
    AdminModule
  ],
  providers: [AppService],
  controllers: [AppController]
})
export class AppModule {
}
