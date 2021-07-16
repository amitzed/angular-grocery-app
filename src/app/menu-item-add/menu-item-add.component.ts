import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

import { IMenu } from '../interfaces/menu-items';
import { MENU } from '../menu-db';

@Component({
  selector: 'app-menu-item-add',
  templateUrl: './menu-item-add.component.html',
  styleUrls: ['./menu-item-add.component.scss']
})
export class MenuItemAddComponent implements OnInit {
  menuItems: IMenu[] = [];

  menuItemForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    color: new FormControl()
  });

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    MENU.push(
      {
        id: this.menuItemForm.value.id,
        name: this.menuItemForm.value.name,
        color: this.menuItemForm.value.color
      }
    )
  }

}
