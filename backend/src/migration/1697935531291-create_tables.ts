import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateTables1697935531291 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE users (
            id serial PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            phone NUMERIC NOT NULL,
            login VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL
        );
    `);

    await queryRunner.query(`
        CREATE TABLE cities (
            id serial PRIMARY KEY,
            name VARCHAR(255) NOT NULL
        );
    `);

    await queryRunner.query(`
        CREATE TABLE pets (
            id serial PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            phone NUMERIC NOT NULL,
            description TEXT NOT NULL,
            size VARCHAR(255) NOT NULL,
            user_id INT REFERENCES users (id),
            city_id INT REFERENCES cities (id)
        );
    `);

    await queryRunner.query(`
        CREATE TABLE imgs (
            id serial PRIMARY KEY,
            pet_id INT REFERENCES pets (id),
            alt VARCHAR(255) NOT NULL,
            imgUrl VARCHAR(255) NOT NULL
        );
    `);

    await queryRunner.query(`
        CREATE TABLE msgs (
            id serial PRIMARY KEY,
            rec_user_id INT REFERENCES users (id),
            sender_user_id INT REFERENCES users (id),
            msg TEXT NOT NULL,
            date VARCHAR(255) NOT NULL
        );
    `);

    await queryRunner.query(`
        CREATE TABLE adoption_forms (
            id serial PRIMARY KEY,
            pet_id INT REFERENCES pets (id),
            user_id INT REFERENCES users (id),
            message_ID INT REFERENCES msgs (id)
        );
    `);
  }


  public async down(queryRunner: QueryRunner): Promise<void> {
    // Drop tables in reverse order of creation
    await queryRunner.query(`DROP TABLE adoption_forms;`);
    await queryRunner.query(`DROP TABLE msgs;`);
    await queryRunner.query(`DROP TABLE imgs;`);
    await queryRunner.query(`DROP TABLE pets;`);
    await queryRunner.query(`DROP TABLE cities;`);
    await queryRunner.query(`DROP TABLE users;`);
  }

}
