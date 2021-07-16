import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroceryMenuComponent } from './grocery-menu/grocery-menu.component';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuItemEditComponent } from './menu-item-edit/menu-item-edit.component';
import { MenuItemAddComponent } from './menu-item-add/menu-item-add.component';

@NgModule({
  declarations: [
    AppComponent,
    GroceryMenuComponent,
    GroceryListComponent,
    MenuItemEditComponent,
    MenuItemAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
