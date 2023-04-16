import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  logoImg: string = "assets/back2.jpg";
  getSlowgan(){
    return 'Your one stop shop for everyting';
  }
}
