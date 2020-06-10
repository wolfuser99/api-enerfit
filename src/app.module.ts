import { Module, Logger } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { GraphQLModule } from '@nestjs/graphql';
import { TerminusModule } from '@nestjs/terminus';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/user/users.module';
import { AuthModule } from './modules/shared/auth/auth.module';
import { RedisModule } from 'nestjs-redis';
import { MailerModule } from '@nestjs-modules/mailer';
// import { NestMinioModule } from 'nestjs-minio';

import { modelEntities, modules } from './modules';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),

        dialect: 'postgres',
        timezone: configService.get<string>('TZ') || 'America/Santiago',
        sync: {
          force:
            //this will drop and recreate the entire DB
            configService.get<string>('NODE_ENV') !== 'production' && false,
        },

        autoLoadModels: true,
        logging: msg => Logger.log(msg, 'Sequelize'),
        synchronize: false, // FIXME: to SYNC DB structural changes
        models: [...modelEntities],
      }),
      inject: [ConfigService],
    }),

    RedisModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        host: configService.get<string>('REDIS_HOST'),
        port: configService.get<number>('REDIS_PORT'),
        db: configService.get<number>('REDIS_DB'),
        password: configService.get<string>('REDIS_PASSWORD'),
        keyPrefix: configService.get<string>('REDIS_PRIFIX'),
      }),
      inject: [ConfigService],
    }),

    // NestMinioModule.register({
    //   endPoint: 'localhost',
    //   port: 9000,
    //   useSSL: false,
    //   accessKey: 'minio',
    //   secretKey: 'minio123',
    // }),

    GraphQLModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        introspection: true,
        autoSchemaFile: './src/schema.graphql',
        playground: true,
        debug: configService.get<string>('NODE_ENV') !== 'production',
        context: ({ req }) => ({ req }),
      }),
      inject: [ConfigService],
    }),

    TerminusModule.forRootAsync({
      useFactory: () => ({
        disableDeprecationWarnings: true,
        endpoints: [
          {
            url: '/health',
            healthIndicators: [],
          },
        ],
      }),
    }),

    MailerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        transport: {
          debug: true,
          secure: true,
          requireTLS: true,
          host: configService.get<string>('MAIL_HOST'),
          port: configService.get<number>('MAIL_PORT'),
          auth: {
            user: configService.get<string>('MAIL_USERNAME'),
            pass: configService.get<string>('MAIL_PASSWORD'),
          },
        },
        defaults: {
          from: configService.get<string>('MAIL_FROM_ADDRESS'),
          sender: configService.get<string>('MAIL_FROM_NAME'),
        },
      }),
      inject: [ConfigService],
    }),

    UsersModule,
    ...modules,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
