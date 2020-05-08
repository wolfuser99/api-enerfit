import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe, Logger } from '@nestjs/common';
import * as pg from 'pg';

import { AppModule } from './app.module';

const fixSequelizeTimestampstzDates = () => {
  // Todo: fix for all cases
  try {
    pg.types.setTypeParser(pg.types.builtins.TIMESTAMPTZ, 'text', str => {
      if (str !== null && str.charAt(str.length - 3) === '-') {
        return new Date(str.substr(0, str.length - 1));
      }
      return str;
    });
  } catch (error) {
    Logger.log(error, 'PG ERROR');
  }
};

async function bootstrap() {
  fixSequelizeTimestampstzDates();

  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const port = configService.get('PORT') || 3000;

  app.enableCors();
  app.enableShutdownHooks();
  app.useGlobalPipes(
    new ValidationPipe({
      // forbidUnknownValues: true,
      // skipMissingProperties: true,
      // whitelist: true,
      // forbidNonWhitelisted: true,
      // transform: true
    }),
  );
  await app.listen(port);
  Logger.log(
    `Application is running on: "${await app.getUrl()}" or "http://localhost:${port}",
      with NODE_ENV: ${configService.get<string>('NODE_ENV')}.`,
    'Bootstrap',
  );
}

bootstrap();
