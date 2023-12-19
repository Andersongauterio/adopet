import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Msg } from '../adoption-messages/msgs.entity';
import { Pet } from '../pets/pets.entity';
import { User } from '../users/users.entity';

@Entity({ name: 'adoption_forms' })
export class AdoptionForm {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Pet, (pet) => pet.adoptionForms)
  @JoinColumn({ name: 'pet_id' })
  pet: Pet;

  @ManyToOne(() => User, (user) => user.adoptionForms)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({ type: 'varchar', length: 255 })
  name: string; 

  @Column({ type: 'varchar', length: 255 })
  email: string;
  
  @Column({ type: 'varchar', length: 255 })
  phone: string;

  @Column('text')
  message: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updated_at: Date;
}