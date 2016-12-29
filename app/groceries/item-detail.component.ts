import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Item } from './item';
import { ItemService } from './item.service';

@Component({
  moduleId: module.id,
  selector: 'my-item-detail',
  templateUrl: 'item-detail.component.html'
})
export class ItemDetailComponent implements OnInit {

  item: Item;

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute,
    private location: Location) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.itemService.getItem(params['id']))
      .subscribe(item => this.item = item);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.itemService.save(this.item);
    this.goBack();
  }

  delete(): void {
    this.itemService.delete(this.item);
    this.goBack();
  }
}
