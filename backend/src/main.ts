import * as dotenv from 'dotenv';
dotenv.config();
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'https://zingy-alfajores-b5880c.netlify.app',
  });
  await app.listen(process.env.PORT || 8080);
}

bootstrap();
