import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class AdoptionForm {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  pet_id: number;

  @Column()
  user_id: number;

  @Column()
  message_ID: number;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updated_at: Date;
}