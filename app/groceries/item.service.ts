import { Injectable } from '@angular/core';

import { Item } from './item';
declare var PouchDB: any;

class PouchDBError {
  error: boolean;
  message: string;
  name: string;
  status: number;
}

class PouchDBResult<Type> {
  offset: number;
  rows: PouchDBDocument<Type>[];
  total_rows: number;
}

class PouchDBDocument<Type> {
  doc: Type;
  id: string;
  key: string;
  value: any;
}

@Injectable()
export class ItemService {
  private db = new PouchDB('grocery-list');

  getItems(): Promise<Item[]> {
    let result: Item[] = [];
    this.db.allDocs({include_docs: true, descending: true}, (error: PouchDBError, doc: PouchDBResult<Item>) => {
      doc.rows.forEach((document) => {
        result.push(document.doc);
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
    this.db.remove(item);
  }

  private generateNewId(): string {
    let time = new Date().getTime();
    let uuid = this.uuid();
    return `${time}-${uuid}`;
  }

  private uuid() {
    let s4 = () => {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    };
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }
}
