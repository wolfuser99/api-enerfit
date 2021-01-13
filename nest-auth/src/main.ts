import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const port = configService.get('PORT', 3000);

  app.enableCors();
  app.enableShutdownHooks();

  try {
    await app.listen(3000);
    Logger.log(
      `Application is running on: "http://localhost:${port}", with NODE_ENV: ${configService.get<string>(
        'NODE_ENV',
      )}.`,
      'Bootstrap',
    );
  } catch (error) {
    Logger.log(`Nest Broken`, 'Bootstrap');
  }
}
bootstrap();
