import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class="alert alert-success" [hidden]="displayNotification">
  <p>This website uses cookies to provide better user experience</p>
  <div class="close">
    <button class="btn" (click)="closeNotification()">X</button>
  </div>
  </div>`,
  styles: ["div{margin: 10px 0px; padding: 10px 20px; bakcground-color: #FAD7A0;text-align:center}","p{color: red}",".close{float: right; margin-top: -50px;}"]
})
export class NotificationComponent {
  displayNotification: boolean = false;
  closeNotification(){
    this.displayNotification = true;
  }
}
