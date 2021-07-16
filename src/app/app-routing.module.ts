import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GroceryMenuComponent } from './grocery-menu/grocery-menu.component';
import { GroceryListComponent } from './grocery-list/grocery-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full'},
  { path: 'menu', component: GroceryMenuComponent },
  { path: 'my-list', component: GroceryListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
