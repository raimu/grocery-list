import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Item } from './item';
import { ItemService } from './item.service';

@Component({
  moduleId: module.id,
  selector: 'my-add-item',
  templateUrl: 'add-item.component.html'
})
export class AddItemComponent implements OnInit {

  item: Item;

  constructor(
    private itemService: ItemService,
    private location: Location) {}

  ngOnInit(): void {
    this.item = new Item();
    console.log(this.item);
  }

  goBack(): void {
    this.location.back();
  }

  add(): void {
    this.itemService.create(this.item)
      .then(() => { this.goBack(); });
  }
}
