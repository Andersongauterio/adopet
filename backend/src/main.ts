import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.development.local' });
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(process.env.PORT || 8080);
}

bootstrap();
