import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ScheduleData } from './schedule.entity';

@Injectable()
export class ScheduleService {
    constructor(
        @InjectRepository(ScheduleData)
        private scheduleRepository: Repository<ScheduleData>,
    ) {}

    async saveScheduleData(data: ScheduleData): Promise<ScheduleData> {
        return this.scheduleRepository.save(data);
    }
}
