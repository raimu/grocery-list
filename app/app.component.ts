import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ToolbarService } from './toolbar.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  menu: Observable<string[]>;

  constructor (private toolbarService: ToolbarService) {}

  ngOnInit() {
    this.menu = this.toolbarService.getMenu();
  }
}
