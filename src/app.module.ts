import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { GraphQLModule } from '@nestjs/graphql';
import { TerminusModule } from '@nestjs/terminus';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/user/users.module';
import { AuthModule } from './modules/shared/auth/auth.module';

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
            //this will drop the entire DB
            configService.get<string>('NODE_ENV') !== 'production' && false,
        },

        autoLoadModels: true,
        synchronize: true,
        models: [...modelEntities],
      }),
      inject: [ConfigService],
    }),
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
    UsersModule,
    ...modules,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
