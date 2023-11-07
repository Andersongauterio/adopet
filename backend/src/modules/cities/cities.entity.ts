import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Pet } from '../pets/pets.entity';
import { State } from '../states/states.entity';

@Entity({ name: "cities" })
export class Cities {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => State, (state) => state.cities)
  @JoinColumn({ name: 'uf', referencedColumnName: 'uf' })
  state: State;

  @OneToMany(() => Pet, (pet) => pet.city)
  pets: Pet[];
}
