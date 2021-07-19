import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { IMenu } from '../interfaces/menu-items';
import { MENU } from '../menu-db';

@Component({
  selector: 'app-menu-item-add',
  templateUrl: './menu-item-add.component.html',
  styleUrls: ['./menu-item-add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuItemAddComponent implements OnInit {
  menuItems: IMenu[] = [];

  constructor(
    private fb: FormBuilder
  ) {}

  public menuItemForm = this.fb.group({
    id: ['', Validators.required],
    name: ['', Validators.required],
    color: ['', Validators.required]
  });

  ngOnInit(): void {}

  onSubmit() {
    console.log(MENU)
    const newSubmitID = this.menuItemForm.get('id')?.value;
    const idCheck = MENU.map(item => {
      console.log('ITEM:', item.id)
      return item.id;
    });

    if (idCheck.includes(newSubmitID)) {
      alert('ID exists, please choose a unique id.')
    } else {
      MENU.push(
        {
          id: this.menuItemForm.value.id,
          name: this.menuItemForm.value.name,
          color: this.menuItemForm.value.color
        }
      )

      // resets form
      this.menuItemForm.reset();
    }

    // Gets full form value.
    console.log(this.menuItemForm?.value);
    // Get a certain form value 'name' = userForm.name.
    console.log(this.menuItemForm.get('name')?.value);
  }

}
