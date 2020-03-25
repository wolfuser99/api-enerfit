import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { GraphQLModule } from '@nestjs/graphql';
import { TerminusModule } from '@nestjs/terminus';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './modules/users/user.entity';
import { UsersModule } from './modules/users/users.module';

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
        sync: { force: configService.get<string>('NODE_ENV') !== 'production' },

        autoLoadModels: true,
        synchronize: true,
        models: [User],
      }),
      inject: [ConfigService],
    }),
    GraphQLModule.forRootAsync({
      useFactory: () => ({
        autoSchemaFile: './src/schema.graphql',
        playground: true,
        debug: true,
        context: ({ req }) => ({ req }),
      }),
    }),
    TerminusModule.forRootAsync({
      useFactory: () => ({
        endpoints: [
          {
            url: '/health',
            healthIndicators: [],
          },
        ],
      }),
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
