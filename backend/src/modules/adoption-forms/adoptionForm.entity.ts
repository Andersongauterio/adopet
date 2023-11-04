import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Msg } from '../adoption-messages/msgs.entity';
import { Pet } from '../pets/pets.entity';
import { User } from '../users/users.entity';

@Entity()
export class AdoptionForm {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Pet, (pet) => pet.adoptionForms)
  @JoinColumn({ name: 'pet_id' })
  pet: Pet;

  @ManyToOne(() => User, (user) => user.adoptionForms)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Msg, (msg) => msg.adoptionForms)
  @JoinColumn({ name: 'message_ID' })
  message: Msg;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updated_at: Date;
}