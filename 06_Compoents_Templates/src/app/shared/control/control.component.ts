import {
  Component,
  HostListener,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent {
  // old:
  // @HostBinding('class') className = 'control';

  //also old:, host method is newer and angular team prefers it
  // @HostListener('click') onClick() {
  //   console.log('clicked');
  // }
  label = input.required<string>();

  onClick() {
    console.log('ckicked');
  }
}
