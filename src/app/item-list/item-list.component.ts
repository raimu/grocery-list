import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ItemService } from '../item.service';
import { Item } from '../item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: Item[];

  constructor(
    private router: Router,
    private itemService: ItemService
  ) {}

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.itemService.getItems().then(items => this.items = items);
  }

  add() {
    this.router.navigate(['/items/add']);
  }

  edit(item: Item) {
    this.router.navigate(['/items/edit', item._id]);
  }
}
