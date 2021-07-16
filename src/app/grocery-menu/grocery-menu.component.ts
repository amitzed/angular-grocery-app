import { Component, OnInit } from '@angular/core';
import { IMenu } from '../interfaces/menu-items';

import { MenuService } from '../menu.service';

@Component({
  selector: 'app-grocery-menu',
  templateUrl: './grocery-menu.component.html',
  styleUrls: ['./grocery-menu.component.scss']
})
export class GroceryMenuComponent implements OnInit {
  menuItems: IMenu[] = [];
  selectedItem?: IMenu;

  constructor(
    private menuService: MenuService
  ) { }

  ngOnInit(): void {
    this.getMenuItems();
  }

  private getMenuItems(): void {
    this.menuService.getMenuItems()
        .subscribe(menu => this.menuItems = menu)
  }

  public onSelectItem(item: IMenu): void {
    this.selectedItem = item;
  }

}
