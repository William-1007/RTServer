import { Controller, Post, Body } from '@nestjs/common';
import { FormService } from './form.service';
import { FormData } from './form.entity';

@Controller('SendInfo')
export class FormController {
    constructor(private readonly formService: FormService) { }

    @Post()
    async createForm(@Body() formData: FormData): Promise<FormData> {
        return this.formService.saveFormData(formData);
    }
}
