import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHeaderSticky]'
})
export class HeaderStickyDirective {

  constructor(private element: ElementRef) { }
  @HostListener('window:scroll', ['$event']) checkScroll() {
    this.onScrollHeader();
  }

  private onScrollHeader() {
    const windowY: number = window.pageYOffset;
    if (windowY >= 30) {
      this.element.nativeElement.classList.add('sticky');
    } else {
      this.element.nativeElement.classList.remove('sticky')
    }
  }
}
