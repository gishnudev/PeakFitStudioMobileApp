import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
dotenv.config();


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors({
    origin: 'http://localhost:8081', // ✅ Allow React Native frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Authorization', // ✅ Include allowed headers
    credentials: true,
  });

  // Start the application
  await app.listen(3000);
  console.log(`🚀 Server running on: http://localhost:3000`);
}

bootstrap();
