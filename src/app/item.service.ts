import { Injectable } from '@angular/core';
import 'pouchdb';

import { Item } from './item';

@Injectable()
export class ItemService {
  private db = new PouchDB('grocery-list');
  private idPrefix = 'item';

  getItems(): Promise<Item[]> {
    const result: Item[] = [];
    this.db.allDocs({ include_docs: true })
      .then((doc) => {
        doc.rows.forEach((document) => {
          result.push(<Item>document.doc);
        });
      });
    return Promise.resolve(result);
  }

  getItem(id: string): Promise<Item> {
    return this.db.get(id);
  }

  create(item: Item): Promise<Item> {
    item._id = this.generateNewId();
    this.db.put(item);
    return Promise.resolve(item);
  }

  save(item: Item): void {
    this.db.put(item);
  }

  delete(item: Item): void {
    this.db.remove(<PouchDB.Core.RemoveDocument>item);
  }

  private generateNewId(): string {
    const time = new Date().getTime();
    const uuid = this.uuid();
    return `${this.idPrefix}-${time}-${uuid}`;
  }

  private uuid() {
    const s4 = () => {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    };
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }
}
