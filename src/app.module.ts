import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/keys';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [MongooseModule.forRoot(config.mongoURI), ItemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
