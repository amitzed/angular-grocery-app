import { Component, OnInit } from '@angular/core';
import { IMenu } from '../interfaces/menu-items';

import { MenuService } from '../menu.service';
import { ListService } from '../list.service';

@Component({
  selector: 'app-grocery-menu',
  templateUrl: './grocery-menu.component.html',
  styleUrls: ['./grocery-menu.component.scss']
})
export class GroceryMenuComponent implements OnInit {
  menuItems: IMenu[] = [];
  selectedItem?: IMenu;

  constructor(
    private menuService: MenuService,
    private listService: ListService
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
    this.listService.addItem(`ID: ${item.id} -- ITEM: ${item.name}`)
  }

  public getColor(item: IMenu) {
    switch (item.color) {
      case 'blue':
        return 'blue';
        break;
      case 'cadetblue':
        return 'cadetblue';
        break;
      case 'cornflowerblue':
        return 'cornflowerblue';
        break;
      case 'gold':
        return 'gold';
        break;
      case 'chartreuse':
        return 'chartreuse';
        break;
      case 'chocolate':
        return 'chocolate';
      case 'darkgreen':
        return 'darkgreen';
        break;
      case 'darkolivegreen':
        return 'darkolivegreen';
        break;
      case 'dodgerblue':
        return 'dodgerblue';
        break;
      case 'indigo':
        return 'indigo';
        break;
      case 'light coral':
        return 'light coral';
        break;
      case 'maroon':
        return 'maroon';
        break;
      default:
        return 'lightgreen'
    }
  }

}
