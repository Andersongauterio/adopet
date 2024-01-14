import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PetsModule } from './modules/pets/pets.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './modules/users/user.module';
import { CitiesModule } from './modules/cities/cities.module';
import { StatesModule } from './modules/states/states.module';
import { PetImgsModule } from './modules/pet-imgs/pet-imgs.module';
import { AdoptionMessagesModule } from './modules/adoption-messages/adoption-messages.module';
import { AdoptionFormsModule } from './modules/adoption-forms/adoption-forms.module';
import { UploadImgModule } from './modules/upload-img/upload-img.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { UploadModule } from './modules/upload/upload.module';

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
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', '..', 'uploads'),
      serveRoot: '/images/', // Endpoint para acessar as imagens, ex: http://localhost:3000/images/nome-da-imagem.jpg
    }),
    PetsModule,
    UserModule,
    CitiesModule,
    StatesModule,
    PetImgsModule,
    AdoptionMessagesModule,
    AdoptionFormsModule,
    UploadImgModule,
    AuthModule,
    UploadModule,
  ]
})
export class AppModule {}
