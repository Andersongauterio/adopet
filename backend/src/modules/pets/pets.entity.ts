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

  @Column({ name: 'phone', nullable: true })
  phone: number;

  @Column({ name: 'description', nullable: false })
  description: string;

  @Column({ name: 'size', nullable: true })
  size: string;

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

  @OneToMany(() => PetImgs, (img) => img.pet)
  imgs: PetImgs[];

  @OneToMany(() => AdoptionForm, (adoptionForm) => adoptionForm.pet)
  adoptionForms: AdoptionForm[];

}
