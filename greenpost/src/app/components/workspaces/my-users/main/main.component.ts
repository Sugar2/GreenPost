import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'my-users-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MyUsersMainComponent {
  private regex = new RegExp(/\/my-users\/\d/);
  constructor(private router: Router) { }
  isActive() {
    return this.regex.test(this.router.url);
  }
}
