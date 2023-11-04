import { MigrationInterface, QueryRunner } from "typeorm"

export class FillCities1699105452399 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    const statesWithCities = [
      {
        uf: 'RS',
        cities: [
          'Porto Alegre',
          'Caxias do Sul',
          'Dois Irmãos',
          'Novo Hamburgo',
          'São Leopoldo',
          'Canoas',
          'Esteio'
        ],
      },
      {
        uf: 'SC',
        cities: [
          'Florianópolis',
          'Joinville',
        ],
      },
      {
        uf: 'PR',
        cities: [
          'Curitiba',
          'Londrina',
        ],
      },
    ];

    for (const state of statesWithCities) {
      const citiesToInsert = state.cities;
      for (const cityName of citiesToInsert) {
        await queryRunner.query(`
          INSERT INTO cities (name, uf) VALUES ('${cityName}', '${state.uf}')
        `);
      }
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const statesWithCities = [
      {
        uf: 'RS',
        cities: [
          'Porto Alegre',
          'Caxias do Sul',
          'Dois Irmãos',
          'Novo Hamburgo',
          'São Leopoldo',
          'Canoas',
          'Esteio'
        ],
      },
      {
        uf: 'SC',
        cities: [
          'Florianópolis',
          'Joinville',
        ],
      },
      {
        uf: 'PR',
        cities: [
          'Curitiba',
          'Londrina',
        ],
      },
    ];

    for (const state of statesWithCities) {
      const citiesToRemove = state.cities.slice(0, 50); // Limit to the first 50 cities
      for (const cityName of citiesToRemove) {
        await queryRunner.query(`
              DELETE FROM cities WHERE name = '${cityName}' AND uf = '${state.uf}'
            `);
      }
    }
  }
}
