import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isDropdownHidden = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  showNavbar(): void {
    this.isDropdownHidden = !this.isDropdownHidden;
  }

  navigate(url: string): void {
    if(url === 'login'){
      this.router.navigate(['/login']);
    } else if(url === 'register'){
      this.router.navigate(['/register']);
    }
  }

}
