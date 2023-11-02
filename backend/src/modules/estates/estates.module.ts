import { Module } from '@nestjs/common';
import { EstatesService } from './estates.service';
import { EstatesController } from './estates.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estate } from './estates.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Estate])],
  providers: [EstatesService],
  controllers: [EstatesController]
})
export class EstatesModule {}
