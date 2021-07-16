import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IMenu } from './interfaces/menu-items';
import { MENU } from './menu-db';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  getMenuItems(): Observable<IMenu[]> {
    const menu = of(MENU);

    return menu;
  }
}
