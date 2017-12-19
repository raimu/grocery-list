import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';

import { ItemListComponent } from './item-list.component';
import { ItemService } from '../item.service';

describe('ItemListComponent', () => {
  let component: ItemListComponent;
  let fixture: ComponentFixture<ItemListComponent>;

  beforeEach(async(() => {
    const routerStub = {};
    const itemServiceStub = {
      getItems: () => new Promise(() => [{ name: 'Salt' }])
    };
    TestBed.configureTestingModule({
      declarations: [ ItemListComponent ],
      providers: [
        { provide: Router, useValue: routerStub },
        { provide: ItemService, useValue: itemServiceStub }
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
