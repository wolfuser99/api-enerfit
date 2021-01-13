import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { FirebaseAdminCoreModule } from './modules/firebase';
import * as admin from 'firebase-admin';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    FirebaseAdminCoreModule.forRootAsync({
      useFactory: () => ({
        credential: admin.credential.cert(
          require('../assets/enerfit-api-firebase-adminsdk-w6zi4-096e7553bc.json'),
        ),
      }),
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
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
