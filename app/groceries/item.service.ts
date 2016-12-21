import { Injectable } from '@angular/core';

import { Item } from './item';
import { ITEMS } from './mock-items';

@Injectable()
export class ItemService {

  getItems(): Promise<Item[]> {
    return Promise.resolve(ITEMS);
  }

  getItem(id: number): Promise<Item> {
    return this.getItems()
      .then(items => items.find(item => item.id === id));
  }

  create(item: Item): Promise<Item> {
    item.id = ITEMS.length + 1;
    ITEMS.push(item);
    return Promise.resolve(item);
  }
}
