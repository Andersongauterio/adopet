import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Cities } from "../cities/cities.entity";
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

  @ManyToOne(() => User, (user) => user.pets)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Cities, (city) => city.pets)
  @JoinColumn({ name: 'city_id' })
  city: Cities;

  @Column({ name: 'city_id', nullable: false })
  city_id: number;

  @CreateDateColumn({ name: 'created_at'})
  createAt: Date;

  @UpdateDateColumn({ name: 'updated_at'})
  updateAt: Date;
}
