import { Component,OnInit } from '@angular/core';


@Component({
  selector: 'app-first-pwa',
  standalone: true,
  imports: [],
  templateUrl: './first-pwa.component.html',
  styleUrl: './first-pwa.component.scss',

})
export class FirstPwaComponent implements OnInit  {

  msg: string = '';

  ngOnInit() {
    this.setGreeting();
  }

  setGreeting() {
    const hours = new Date().getHours();

    if (hours < 12) {
      this.msg = 'Good Morning';
    } else if (hours < 18) {
      this.msg = 'Good Afternoon';
    } else {
      this.msg = 'Good Evening';
    }
  }
  }
