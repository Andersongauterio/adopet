import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { Cities } from '../cities/cities.entity';

@Entity({ name: 'states' })
export class State {
  @PrimaryColumn({ type: 'varchar', length: 2 })
  uf: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @OneToMany(() => Cities, (city) => city.state)
  cities: Cities[];
}