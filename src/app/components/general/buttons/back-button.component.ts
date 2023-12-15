import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'back-button',
    templateUrl: './back-button.component.html',
    // styleUrl: './back-button.component.scss',
  })

  export class BackButtonComponent {
    constructor(
      private router: Router
    ) {}

    redirectBack() {
      this.router.navigate(['..']);
    }
  }