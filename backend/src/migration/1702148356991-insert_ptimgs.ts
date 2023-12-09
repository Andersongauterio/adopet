import { MigrationInterface, QueryRunner } from "typeorm"

export class InsertPtimgs1702148356991 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            INSERT INTO imgs (pet_id, alt, imgurl) VALUES
            (1, 'A cute dog', 'https://cdn.pixabay.com/photo/2016/02/19/15/46/dog-1210559_960_720.jpg'),
            (1, 'Another cute dog', 'https://cdn.pixabay.com/photo/2016/02/19/15/46/dog-1210559_960_720.jpg'),
            (2, 'A cute cat', 'https://www.petz.com.br/blog/wp-content/uploads/2020/08/cat-sitter-felino.jpg');
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
  }

}
