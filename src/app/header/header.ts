import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isMenuOpen: boolean = false;

  // Function to open/close menu
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Function jo mobile links click karne par menu close kare
  closeMenu() {
    this.isMenuOpen = false;
  }
}
