import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ToolbarService {
  private menu: Subject<string[]> = new Subject();

  setMenu(items: string[]) {
    this.menu.next(items);
  }

  getMenu(): Observable<string[]> {
    return this.menu;
  }

}
