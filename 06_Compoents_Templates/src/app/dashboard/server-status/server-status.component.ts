import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit, AfterViewInit, OnDestroy {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';
  private interval?: ReturnType<typeof setInterval>;

  constructor() {}

  // Its not wrong to do something like this, but there is another way, (Component Lifecycle)
  // constructor() {
  //   setInterval(() => {
  //     const rnd = Math.random();

  //     if (rnd < 0.33) {
  //       this.currentStatus = 'online';
  //     } else if (rnd < 0.66) {
  //       this.currentStatus = 'offline';
  //     } else {
  //       this.currentStatus = 'unknown';
  //     }
  //   }, 5000);
  // }

  // This would be the better way:
  // Because of "implements OnInit"
  ngOnInit() {
    setInterval(() => {
      const rnd = Math.random();

      if (rnd < 0.33) {
        this.currentStatus = 'online';
      } else if (rnd < 0.66) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);
  }

  ngAfterViewInit() {
    console.log('After view init');
  }

  ngOnDestroy() {
    clearTimeout(this.interval);
  }
}
