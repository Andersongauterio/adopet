import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { AdoptionForm } from '../adoption-forms/adoptionForm.entity';
import { Msg } from '../adoption-messages/msgs.entity';
import { Pet } from '../pets/pets.entity';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  login: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  password: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  email: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

  @OneToMany(() => Pet, (pet) => pet.user)
  pets: Pet[];

  @OneToMany(() => Msg, (msg) => msg.senderUser)
  sentMsgs: Msg[];

  @OneToMany(() => Msg, (msg) => msg.recUser)
  receivedMsgs: Msg[];

  @OneToMany(() => AdoptionForm, (adoptionForm) => adoptionForm.user)
  adoptionForms: AdoptionForm[];

}
