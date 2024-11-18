import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormData } from './form.entity';
import { FormService } from './form.service';
import { FormController } from './form.controller';

@Module({
    imports: [TypeOrmModule.forFeature([FormData])],
    providers: [FormService],
    controllers: [FormController],
})
export class FormModule {}
