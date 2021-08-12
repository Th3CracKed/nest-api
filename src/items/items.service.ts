import { Injectable } from '@nestjs/common';
import { Item } from 'src/interfaces/item.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class ItemsService {
  private readonly items: Item[];
  constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {}

  async findAll(): Promise<Item[]> {
    return await this.itemModel.find();
  }

  async findOne(id: string) {
    return await this.itemModel.findOne({ _id: id });
  }

  async create(item: Item) {
    const newItem = new this.itemModel(item);
    return await newItem.save();
  }

  async update(newItem: Item, id: string) {
    return await this.itemModel.findByIdAndUpdate(id, newItem, { new: true });
  }

  async delete(id: string) {
    return await this.itemModel.findByIdAndRemove(id);
  }
}
