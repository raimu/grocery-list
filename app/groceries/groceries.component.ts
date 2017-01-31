import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Item } from './item';
import { ItemService } from './item.service';
import { ToolbarService } from '../toolbar.service';

@Component({
  moduleId: module.id,
  selector: 'my-groceries',
  templateUrl: 'groceries.component.html',
  styles: [`
    .selected { background: #eee; }
    .add-button { position: fixed; bottom: 1em; right: 1em }
    button { border: none; background: none; }
    .pull-right { float: right; }
    .done { text-decoration: line-through; color: #bdbdbd; }`]
})
export class GroceriesComponent implements OnInit {
  items: Item[] = [];
  selectedItem: Item;

  constructor(
    private router: Router,
    private itemService: ItemService,
    private toolbarService: ToolbarService) {}

  ngOnInit(): void {
    this.getItems();
    this.toolbarService.setMenu(['delete all selected items']);
  }

  getItems(): void {
    this.itemService.getItems().then(items => this.items = items);
  }

  gotoDetail(item: Item) {
    this.router.navigate(['/groceries/detail', item._id]);
  }

  add(): void {
    this.router.navigate(['/groceries/add']);
  }
}
