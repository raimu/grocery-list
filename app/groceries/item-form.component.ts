import { Component, Input } from '@angular/core';

import { Item } from './item';

@Component({
  moduleId: module.id,
  selector: 'my-item-form',
  templateUrl: 'item-form.component.html'
})
export class ItemFormComponent {
  @Input() item: Item;
}
