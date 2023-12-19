import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdoptionForm } from './adoptionForm.entity';
import { AdoptionFormsService } from './adoption-forms.service';
import { AdoptionFormsController } from './adoption-forms.controller';
import { Pet } from '../pets/pets.entity';
import { User } from '../users/users.entity';

@Module({
    imports: [TypeOrmModule.forFeature([AdoptionForm, Pet, User])],
    providers: [AdoptionFormsService],
    controllers: [AdoptionFormsController]
})
export class AdoptionFormsModule {}
