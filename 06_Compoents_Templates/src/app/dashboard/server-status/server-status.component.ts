import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  inject,
  DestroyRef,
} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit, AfterViewInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';
  // private interval?: ReturnType<typeof setInterval>;

  // This is the newer way, since angular 16
  private destroyRef = inject(DestroyRef);

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
    console.log('on init');
    const interval = setInterval(() => {
      const rnd = Math.random();

      if (rnd < 0.33) {
        this.currentStatus = 'online';
      } else if (rnd < 0.66) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }

  ngAfterViewInit() {
    console.log('After view init');
  }

  // This is the older Variant
  // ngOnDestroy() {
  //   clearTimeout(this.interval);
  // }
}
