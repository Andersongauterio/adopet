import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { AdoptionForm } from "../adoption-forms/adoptionForm.entity";
import { Cities } from "../cities/cities.entity";
import { PetImgs } from "../pet-imgs/petImgs.entity";
import { User } from "../users/users.entity";

@Entity({ name: 'pets' })
export class Pet {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'name', nullable: false })
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ name: 'size', nullable: true })
  size: string;

  @Column({ type: 'varchar', length: 255 })
  gender: string;

  @Column({ type: 'varchar', length: 255 })
  species: string;

  @Column({ type: 'varchar', length: 255 })
  age: number;

  @CreateDateColumn({ name: 'created_at'})
  createAt: Date;

  @UpdateDateColumn({ name: 'updated_at'})
  updateAt: Date;

  @ManyToOne(() => User, (user) => user.pets)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Cities, (city) => city.pets)
  @JoinColumn({ name: 'city_id' })
  city: Cities;

  @Column({ nullable: true })
  city_id: number;

  @OneToMany(() => PetImgs, (img) => img.pet)
  imgs: PetImgs[];

  @OneToMany(() => AdoptionForm, (adoptionForm) => adoptionForm.pet)
  adoptionForms: AdoptionForm[];

}
