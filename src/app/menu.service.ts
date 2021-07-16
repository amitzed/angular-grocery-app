import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IMenu } from './interfaces/menu-items';
import { MENU } from './menu-db';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menuItems: string[] = [];

  constructor() { }

  getMenuItems(): Observable<IMenu[]> {
    const menu = of(MENU);

    return menu;
  }

  addMenuItem(menuItems: string) {
    this.menuItems.push(menuItems)
  }

}
