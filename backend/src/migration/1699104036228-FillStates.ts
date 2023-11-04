import { MigrationInterface, QueryRunner } from "typeorm"

export class FillStates1699104036228 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const states = [
      { uf: 'AC', name: 'Acre' },
      { uf: 'AL', name: 'Alagoas' },
      { uf: 'AP', name: 'Amapá' },
      { uf: 'AM', name: 'Amazonas' },
      { uf: 'BA', name: 'Bahia' },
      { uf: 'CE', name: 'Ceará' },
      { uf: 'DF', name: 'Distrito Federal' },
      { uf: 'ES', name: 'Espírito Santo' },
      { uf: 'GO', name: 'Goiás' },
      { uf: 'MA', name: 'Maranhão' },
      { uf: 'MT', name: 'Mato Grosso' },
      { uf: 'MS', name: 'Mato Grosso do Sul' },
      { uf: 'MG', name: 'Minas Gerais' },
      { uf: 'PA', name: 'Pará' },
      { uf: 'PB', name: 'Paraíba' },
      { uf: 'PR', name: 'Paraná' },
      { uf: 'PE', name: 'Pernambuco' },
      { uf: 'PI', name: 'Piauí' },
      { uf: 'RJ', name: 'Rio de Janeiro' },
      { uf: 'RN', name: 'Rio Grande do Norte' },
      { uf: 'RS', name: 'Rio Grande do Sul' },
      { uf: 'RO', name: 'Rondônia' },
      { uf: 'RR', name: 'Roraima' },
      { uf: 'SC', name: 'Santa Catarina' },
      { uf: 'SP', name: 'São Paulo' },
      { uf: 'SE', name: 'Sergipe' },
      { uf: 'TO', name: 'Tocantins' },
    ];

    for (const state of states) {
      await queryRunner.query(`
            INSERT INTO states (uf, name) VALUES ('${state.uf}', '${state.name}')
      `);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const states = [
      'AC',
      'AL',
      'AP',
      'AM',
      'BA',
      'CE',
      'DF',
      'ES',
      'GO',
      'MA',
      'MT',
      'MS',
      'MG',
      'PA',
      'PB',
      'PR',
      'PE',
      'PI',
      'RJ',
      'RN',
      'RS',
      'RO',
      'RR',
      'SC',
      'SP',
      'SE',
      'TO',
    ];

    for (const uf of states) {
      await queryRunner.query(`
            DELETE FROM states WHERE uf = '${uf}'
      `);
    }
  }

}
