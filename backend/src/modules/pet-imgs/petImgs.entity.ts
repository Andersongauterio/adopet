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
  alt: string;

  @Column()
  imgUrl: string;
}
