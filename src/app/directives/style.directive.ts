import { Directive, ElementRef, HostListener, Renderer2, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  // tslint:disable-next-line: no-inferrable-types
  @Input('appStyle') count: number = 0;

  @HostBinding('style.backgroundColor') bgColor: string = '';

  constructor(private element: ElementRef, private render: Renderer2) { }

  @HostListener('mouseenter') onEnter() {
    /* this.render.setStyle(this.element.nativeElement, 'background-color', 'blue'); */

    if (this.count < 3) {
      this.bgColor = 'gray';
    } else if (this.count > 2 && this.count < 7) {
      this.bgColor = 'blue';
    } else if (this.count > 6 && this.count < 11) {
      this.bgColor = 'green';
    } else { this.bgColor = 'red'; }

    /* console.log(this.bgColor);
    console.log(this.count); */
  }

  @HostListener('mouseleave') onLeave() {
      this.bgColor = null;
  }
}
