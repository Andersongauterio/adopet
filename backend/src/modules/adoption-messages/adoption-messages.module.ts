import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MsgsService } from './adoption-messages.service';
import { Msg } from './msgs.entity';
import { MsgsController } from './adoption-messages.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Msg])],
  providers: [MsgsService],
  controllers: [MsgsController]
})
export class AdoptionMessagesModule {}
