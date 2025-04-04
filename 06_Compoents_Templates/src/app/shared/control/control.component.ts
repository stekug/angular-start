import {
  AfterContentInit,
  afterNextRender,
  afterRender,
  Component,
  contentChild,
  ContentChild,
  ElementRef,
  inject,
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
export class ControlComponent implements AfterContentInit {
  // old:
  // @HostBinding('class') className = 'control';

  //also old:, host method is newer and angular team prefers it
  // @HostListener('click') onClick() {
  //   console.log('clicked');
  // }
  label = input.required<string>();
  private el = inject(ElementRef);
  // @ContentChild('input') private control?: ElementRef<
  //   HTMLInputElement | HTMLTextAreaElement
  // >;
  private control =
    contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  constructor() {
    // executes always, when something in the app is rendered
    afterRender(() => {
      console.log('after render');
    });

    // executes only for the next change in the app
    afterNextRender(() => {
      console.log('after next render');
    });
  }

  ngAfterContentInit() {
    // ...
  }

  onClick() {
    console.log('ckicked');
    console.log(this.el);
    console.log(this.control());
  }
}
