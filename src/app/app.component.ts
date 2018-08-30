import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  devs: any = ["gise", "renzo", "ivan", "salim"];
  date: any = new Date();
  constructor() {
    this.giveMeOrder();
  }
  giveMeOrder() {
    this.devs.sort(function () { return 0.5 - Math.random() })
  }

}
