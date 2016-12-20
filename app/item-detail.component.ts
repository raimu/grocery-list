import { Component, Input } from '@angular/core';

import 'rxjs/add/operator/switchMap';

import { Item } from './item';
import { ItemService } from './item.service';

@Component({
  moduleId: module.id,
  selector: 'my-item-detail',
  templateUrl: 'item-detail.component.html'
})
export class ItemDetailComponent {

  @Input() item: Item;

  constructor(private itemService: ItemService) {}

  goBack(): void {
    console.log('Not implemented now!');
  }

  save(): void {
    console.log('Not implemented now!');
  }
}
