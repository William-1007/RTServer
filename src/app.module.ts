import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { ContactModule } from './contact/contact.module';
import { FormModule } from './form/form.module';
import { ScheduleModule } from './scheduleinfo/schedule.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'postgres',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ContactModule,
    FormModule,
    ScheduleModule
  ],
  controllers: [AppController],
})
export class AppModule {}
