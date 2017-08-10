import { Component, Inject, Optional } from '@angular/core';
import { PICTUREPARK_API_URL } from '@picturepark/sdk-v1-angular';
import { AuthService } from "@picturepark/sdk-v1-angular";

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent {
  constructor(@Inject(AuthService) public authService: AuthService) {
  }

  login() {
    this.authService.login();
  }
}