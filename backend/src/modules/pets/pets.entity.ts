import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'pets' })
export class PetEntity {
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

  @Column({ name: 'user_id', nullable: false })
  user_id: number;

  @Column({ name: 'city_id', nullable: false })
  city_id: number;

  @CreateDateColumn({ name: 'created_at'})
  createAt: Date;

  @UpdateDateColumn({ name: 'updated_at'})
  updateAt: Date;
}
