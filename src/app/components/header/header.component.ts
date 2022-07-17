import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isDropdownHidden = false;

  constructor(private router: Router) { }

  ngOnInit(): void { }

  showNavbar(): void {
    this.isDropdownHidden = !this.isDropdownHidden;
  }

  navigate(url: string): void {
    switch (url) {
      case 'login':
        this.router.navigate(['/login']);
        break;
      case 'register':
        this.router.navigate(['/register']);
        break;
      case 'profile':
        this.router.navigate(['/profile']);
        break;
      case 'payment':
        this.router.navigate(['/payment']);
        break;
      default:
        break;
    }
  }


}
