import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import './envs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  app.useGlobalFilters();

  await app.listen(3000);
  console.log('Kafka producer service is listening!');
}
bootstrap();
