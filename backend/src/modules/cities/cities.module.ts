import { Cities } from './cities.entity';
import { Module } from '@nestjs/common';
import { CitiesController } from './cities.controller';
import { CitiesService } from './cities.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Cities])],
  controllers: [CitiesController],
  providers: [CitiesService]
})
export class CitiesModule {}
