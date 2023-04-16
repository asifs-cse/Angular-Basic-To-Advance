import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: '<div class="alert alert-success" [hidden]="displayNotification"><p>This website uses cookies to provide better user experience</p></div>',
  styles: ["div{margin: 10px 0px; padding: 10px 20px; bakcground-color: #FAD7A0;text-align:center}","p{color: red}"]
})
export class NotificationComponent {
  displayNotification: boolean = false;
}
