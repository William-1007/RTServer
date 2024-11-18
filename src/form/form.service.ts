import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FormData } from './form.entity';

@Injectable()
export class FormService {
    constructor(
        @InjectRepository(FormData)
        private formRepository: Repository<FormData>,
    ) {}

    async saveFormData(data: FormData): Promise<FormData> {
        return this.formRepository.save(data);
    }
}
