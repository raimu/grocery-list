import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { ItemService } from '../item.service';
import { Item } from '../item';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  item: Item;

  constructor(
    private location: Location,
    private itemService: ItemService
  ) { }

  ngOnInit() {
    this.item = new Item();
  }

  add() {
    this.itemService.create(this.item)
      .then(() => this.location.back());
  }

  cancel() {
    this.location.back();
  }

}
