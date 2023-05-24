import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// @dev using nest factory to create new nest js application with a root module.
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
