import { MigrationInterface, QueryRunner } from "typeorm"

export class UsersPets1702046022275 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO users (name, phone, login, password, created_at, updated_at) VALUES 
        ('John Doe', 123456789, 'johndoe', 'password123', NOW(), NOW()),
        ('Jane Smith', 987654321, 'janesmith', 'password321', NOW(), NOW());
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DELETE FROM users WHERE login IN ('johndoe', 'janesmith');
      `);
  }

}
