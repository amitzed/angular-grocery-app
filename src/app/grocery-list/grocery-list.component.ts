import { Component, OnInit } from '@angular/core';

import { ListService } from '../list.service';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.scss']
})
export class GroceryListComponent implements OnInit {

  constructor(
    public listService: ListService
  ) { }

  ngOnInit(): void {
  }

}
