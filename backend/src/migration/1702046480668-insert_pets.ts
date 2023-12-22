import { MigrationInterface, QueryRunner } from "typeorm"

export class InsertPets1702046480668 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        INSERT INTO pets (name, description, size, gender, species, age, user_id, city_id) VALUES 
        ('Pet 1', 'Description 1', 'Small', 'Male', 'Dog', 2, 1, 1),
        ('Pet 2', 'Description 2', 'Medium', 'Female', 'Cat', 4, 1, 2),
        ('Pet 3', 'Description 3', 'Medium', 'Female', 'Dog', 4, 1, 2),
        ('Pet 4', 'Description 4', 'Small', 'Female', 'Dog', 4, 1, 2),
        ('Pet 5', 'Description 5', 'Large', 'Male', 'Dog', 4, 1, 2),
        ('Pet 6', 'Description 6', 'Medium', 'Male', 'Dog', 4, 1, 2),
        ('Pet 7', 'Description 7', 'Medium', 'Male', 'Dog', 4, 1, 2),
        ('Pet 8', 'Description 8', 'Large', 'Male', 'Dog', 4, 1, 2),
        ('Pet 10', 'Description 10', 'Large', 'Female', 'Rabbit', 3, 1, 3);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DELETE FROM pets;
        `);
  }

}
