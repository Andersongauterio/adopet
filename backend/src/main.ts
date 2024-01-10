import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.development.local' });
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: function (origin, callback) {
      const allowedOrigins = ['https://zingy-alfajores-b5880c.netlify.app', 'http://localhost:3000'];
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  });
  await app.listen(process.env.PORT || 8080);
}

bootstrap();
