import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';

import { ItemService } from '../item.service';
import { Item } from '../item';

@Component({
  selector: 'app-add-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
  item: Item;

  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private itemService: ItemService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      const id = params['id'];
      this.itemService.getItem(id).then(item => this.item = item);
    });
  }

  cancel() {
    this.location.back();
  }

  save() {
    this.itemService.save(this.item).then(() => this.location.back());
  }
}
