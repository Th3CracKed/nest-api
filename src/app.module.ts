import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/keys';
import { ItemSchema } from './items/schemas/item.schema';

@Module({
  imports: [
    MongooseModule.forRoot(config.mongoURI),
    MongooseModule.forFeature([{ name: 'Item', schema: ItemSchema }]),
  ],
  controllers: [AppController, ItemsController],
  providers: [AppService, ItemsService],
})
export class AppModule {}
