import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Pet } from '../pets/pets.entity';

@Entity( {name: "imgs" } )
export class PetImgs {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Pet, (pet) => pet.imgs)
  @JoinColumn({ name: 'pet_id' })
  pet: Pet;

  @Column()
  pet_id: number;

  @Column()
  alt: string;

  @Column()
  imgurl: string;
}
