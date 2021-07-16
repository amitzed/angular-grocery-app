import { Component, Input, OnInit } from '@angular/core';

import { IMenu } from '../interfaces/menu-items';

@Component({
  selector: 'app-menu-item-edit',
  templateUrl: './menu-item-edit.component.html',
  styleUrls: ['./menu-item-edit.component.scss']
})
export class MenuItemEditComponent implements OnInit {
  @Input() item?: IMenu;

  constructor() { }

  ngOnInit(): void {
  }

}
