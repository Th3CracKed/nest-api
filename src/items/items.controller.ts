import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly  itemsService: ItemsService) {}

  @Get()
  async findAll() {
    return await this.itemsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id) {
    return await this.itemsService.findOne(id);
  }

  @Post()
  async create(@Body() createItemDto: CreateItemDto) {
    return await this.itemsService.create(createItemDto);
  }

  @Put(':id')
  async update(@Body() updateItemDto: CreateItemDto, @Param('id') id: string) {
    return await this.itemsService.update(updateItemDto, id);
  }

  @Delete(':id')
  async delete(@Param('id') id) {
    return await this.itemsService.delete(id);
  }
}
