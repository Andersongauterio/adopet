import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PetsModule } from './modules/pets/pets.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './modules/users/user.module';
import { CitiesModule } from './modules/cities/cities.module';
import { EstatesModule } from './modules/estates/estates.module';
import { PetImgsModule } from './modules/pet-imgs/pet-imgs.module';
import { AdptionMessagesModule } from './modules/adption-messages/adption-messages.module';
import { AdptionFormsModule } from './modules/adption-forms/adption-forms.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.development.local',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: process.env.DB_DATABASE,
      host: process.env.DB_HOST,
      password: process.env.DB_PASSWORD,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      entities: [`${__dirname}/**/*.entity{.js,.ts}`],
      migrations: [`${__dirname}/migration/{.ts,*.js}`],
      migrationsRun: true,
    }),
    PetsModule,
    UserModule,
    CitiesModule,
    EstatesModule,
    PetImgsModule,
    AdptionMessagesModule,
    AdptionFormsModule,
  ],
})
export class AppModule {}
