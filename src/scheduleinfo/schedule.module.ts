import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleData } from './schedule.entity';
import { ScheduleService } from './schedule.service';
import { ScheduleController } from './schedule.controller';

@Module({
    imports: [TypeOrmModule.forFeature([ScheduleData])],
    providers: [ScheduleService],
    controllers: [ScheduleController],
})
export class ScheduleModule {}
