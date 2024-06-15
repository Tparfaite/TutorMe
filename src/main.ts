import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';





dotenv.config(); 

async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin:'http://localhost:4200',
    credentials:true,
  });
  app.use(cookieParser())
  await app.listen(3005);
}
bootstrap();
