import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {BrandModule} from './brand/brand.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {join} from 'path';
import { ConfigModule } from "@nestjs/config";
import {BrandSchema} from './@core/infra/fd/db/typeorm/brand/brand.schema';

@Module({
  imports: [BrandModule, TypeOrmModule.forRoot(
    {
      type: 'sqlite',
      database: join(__dirname, 'database.sqlite'),
      synchronize: true,
      logging: true,
      entities: [BrandSchema],
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    })],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {
}
