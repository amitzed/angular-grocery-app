import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroceryMenuComponent } from './grocery-menu/grocery-menu.component';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { FormsModule } from '@angular/forms';
import { MenuItemEditComponent } from './menu-item-edit/menu-item-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    GroceryMenuComponent,
    GroceryListComponent,
    MenuItemEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
