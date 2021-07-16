import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'grocery store inc.';
  menuViewSelected = true;
  cartViewSelected = false;

  public onViewSelected() {
    this.menuViewSelected = !this.menuViewSelected;
    this.cartViewSelected = !this.cartViewSelected;
  }
}
