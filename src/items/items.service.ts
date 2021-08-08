import { Injectable } from '@nestjs/common';
import { Item } from 'src/interfaces/item.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '23',
      name: 'Mouse 1',
      qty: 100,
      description: 'My item 1',
    },
    {
      id: '24',
      name: 'Mouse 2',
      qty: 100,
      description: 'My item 2',
    },
  ];

  findAll() {
    return this.items;
  }

  findOne(id: string) {
    return this.items.find((item) => item.id === id);
  }
}
