import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: 'estates' })
export class Estate {
  @PrimaryColumn({ type: 'varchar', length: 2 })
  uf: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;
}