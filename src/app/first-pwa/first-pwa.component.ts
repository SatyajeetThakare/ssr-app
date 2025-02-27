import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-first-pwa',
  standalone: true,
  imports: [],
  templateUrl: './first-pwa.component.html',
  styleUrl: './first-pwa.component.scss',

})
export class FirstPwaComponent implements OnInit, OnDestroy {

  msg: string = '';
  currentTime: string = '';
  private timeInterval!: any;

  ngOnInit() {
    this.setGreeting();
    this.updateTime();
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

  updateTime() {
    this.currentTime = new Date().toLocaleTimeString(); // Set initial time
    this.timeInterval = setInterval(() => {
      this.currentTime = new Date().toLocaleTimeString();
    }, 1000); // Update time every second
  }

  ngOnDestroy() {
    clearInterval(this.timeInterval); // Clear interval when component is destroyed
  }
}
