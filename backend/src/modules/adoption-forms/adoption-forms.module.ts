import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdoptionForm } from './adoptionForm.entity';
import { AdoptionFormsService } from './adoption-forms.service';
import { AdoptionFormsController } from './adoption-forms.controller';

@Module({
    imports: [TypeOrmModule.forFeature([AdoptionForm])],
    providers: [AdoptionFormsService],
    controllers: [AdoptionFormsController]
})
export class AdoptionFormsModule {}
