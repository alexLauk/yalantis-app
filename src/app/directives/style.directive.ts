import { Directive,Input, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective implements OnInit {

  @Input('appStyle') count: number = 0;

  private backgroundColor: string;

  @HostBinding('style.backgroundColor') get getBackgroundColor(){
    return this.backgroundColor
  }

  ngOnInit() {
    if (this.count < 3) {
      this.backgroundColor = 'lightgrey';
    } else if (this.count > 2 && this.count < 7) {
      this.backgroundColor = 'skyblue';
    } else if (this.count > 6 && this.count < 11) {
      this.backgroundColor = 'lightseagreen';
    } else { this.backgroundColor = 'lightcoral'; }
  }

}
