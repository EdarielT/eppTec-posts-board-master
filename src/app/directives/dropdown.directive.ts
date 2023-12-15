import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: 'appDropdown',
})
export class DropdownDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') onClick() {
    this.toggleDropdown();
  }

  private toggleDropdown() {
    console.log('Toggling dropdown');
    const dropdownMenu = this.el.nativeElement.querySelector('.dropdown-menu');
    this.renderer.addClass(dropdownMenu, 'show');
  }
}
