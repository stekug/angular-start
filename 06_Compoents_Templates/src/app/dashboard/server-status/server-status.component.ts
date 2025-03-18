import { Component } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';

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
}
