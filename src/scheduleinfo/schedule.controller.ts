import { Controller, Post, Body } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { ScheduleData } from './schedule.entity';

@Controller('SendScheduleInfo')
export class ScheduleController {
    constructor(private readonly shceduleService: ScheduleService) { }

    @Post()
    async createScheduleinfo(@Body() scheduledata: ScheduleData): Promise<ScheduleData> {
        return this.shceduleService.saveScheduleData(scheduledata);
    }
}
