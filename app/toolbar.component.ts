import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { ToolbarService } from './toolbar.service';

@Component({
  moduleId: module.id,
  selector: 'app-toolbar',
  templateUrl: 'toolbar.component.html'
})
export class ToolbarComponent {
  menu: Observable<string[]>;

  constructor (private toolbarService: ToolbarService) {}

  ngOnInit() {
    this.menu = this.toolbarService.getMenu();
  }
}