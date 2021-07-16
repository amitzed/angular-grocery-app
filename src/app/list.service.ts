import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  listItems: string[] = [];

  constructor() { }

  addItem(listItem: string) {
    this.listItems.push(listItem)
  }

  deleteList() {
    this.listItems = [];
  }
}
