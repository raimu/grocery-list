import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Item } from './item';
import { ItemService } from './item.service';

@Component({
  moduleId: module.id,
  selector: 'my-groceries',
  templateUrl: 'groceries.component.html',
  styles: [`.selected { background: #eee; }`]
})
export class GroceriesComponent implements OnInit {
  items: Item[] = [];
  selectedItem: Item;

  constructor(
    private router: Router,
    private itemService: ItemService) {}

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.itemService.getItems().then(items => this.items = items);
  }

  onSelect(item: Item) {
    if (this.selectedItem === item) {
      this.gotoDetail(item);
    }
    this.selectedItem = item;
  }

  gotoDetail(item: Item) {
    this.router.navigate(['/detail', item.name]);
  }
}
