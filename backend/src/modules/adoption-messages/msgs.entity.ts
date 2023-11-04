import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { AdoptionForm } from '../adoption-forms/adoptionForm.entity';
import { User } from '../users/users.entity';

@Entity({ name: 'msgs' })
export class Msg {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.sentMsgs)
  @JoinColumn({ name: 'sender_user_id' })
  senderUser: User;

  @ManyToOne(() => User, (user) => user.receivedMsgs)
  @JoinColumn({ name: 'rec_user_id' })
  recUser: User;

  @Column('text')
  msg: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

  @OneToMany(() => AdoptionForm, (adoptionForm) => adoptionForm.message)
  adoptionForms: AdoptionForm[];
}