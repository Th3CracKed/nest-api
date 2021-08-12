import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';

@ApiTags('items')
@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  @ApiOkResponse({
    description: 'Return all items in array',
    isArray: true,
    type: CreateItemDto,
  })
  @ApiNotFoundResponse({ description: 'Forbidden' })
  async findAll() {
    return await this.itemsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'Return searched item',
    type: CreateItemDto,
  })
  @ApiNotFoundResponse({ description: 'Forbidden' })
  async findOne(@Param('id') id) {
    return await this.itemsService.findOne(id);
  }

  @Post()
  @ApiCreatedResponse({
    description: 'The item has been successfully created.',
    type: CreateItemDto,
  })
  @ApiNotFoundResponse({ description: 'Forbidden' })
  @ApiBody({ type: [CreateItemDto] })
  async create(@Body() createItemDto: CreateItemDto) {
    return await this.itemsService.create(createItemDto);
  }

  @Put(':id')
  @ApiOkResponse({
    description: 'The item has been successfully updated',
    type: CreateItemDto,
  })
  @ApiNotFoundResponse({ description: 'Forbidden' })
  async update(@Body() updateItemDto: CreateItemDto, @Param('id') id: string) {
    return await this.itemsService.update(updateItemDto, id);
  }

  @Delete(':id')
  @ApiOkResponse({
    description: 'The item has been successfully deleted',
    type: CreateItemDto,
  })
  @ApiNotFoundResponse({ description: 'Forbidden' })
  async delete(@Param('id') id) {
    return await this.itemsService.delete(id);
  }
}
