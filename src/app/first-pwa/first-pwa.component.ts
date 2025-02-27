import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-first-pwa',
  standalone: true,
  imports: [],
  templateUrl: './first-pwa.component.html',
  styleUrl: './first-pwa.component.scss',

})
export class FirstPwaComponent implements OnInit {

  msg: string = '';
  currentTime: string = '';
  
  ngOnInit() {
    this.setGreeting();
    this.getCurrentTime();
    this.showAlertAfter10Minutes();
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

  getCurrentTime() {
    this.currentTime = new Date().toLocaleTimeString();
  }

  showAlertAfter10Minutes() {
    setTimeout(() => {
      alert('You have been using the app for 10 minutes!');
    }, 10 * 60 * 1000); // 10 minutes = 600000 ms
  }
}

