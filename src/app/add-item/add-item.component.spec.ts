import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';

import { AddItemComponent } from './add-item.component';
import { ItemService } from '../item.service';

describe('AddItemComponent', () => {
  let component: AddItemComponent;
  let fixture: ComponentFixture<AddItemComponent>;

  beforeEach(async(() => {
    const locationStub = {};
    const itemServiceStub = {};
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ AddItemComponent ],
      providers: [
        { provide: Location, useValue: locationStub },
        { provide: ItemService, useValue: itemServiceStub }
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
