import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from 'src/app/core/interface/profile';
import { AuthService } from 'src/app/core/service/auth.service';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isDropdownHidden = false;
  isDropdownUser = false;
  isLoggedIn = false;
  profile!: Profile;

  constructor(
    private router: Router,
    private tokenService: AuthService,
    private userService: UserService
    ) { }

  ngOnInit(): void {
    this.findUserById();
  }

  showNavbar(): void {
    this.isDropdownHidden = !this.isDropdownHidden;
  }

  showAction(): void {
    this.isDropdownUser = !this.isDropdownUser;
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

  findUserById() {
    if(this.tokenService.loadToken()){
      this.isLoggedIn = true;
      const userId = this.tokenService.getId();
      this.userService.findUserById(userId).subscribe(
        {
          next: (response) => {
            this.profile = {
              _id: response._id,
              name: response.name,
              email: response.email
            }
          }
        }
      )
    }
  }

  logout() {
    this.tokenService.logout();
    this.isLoggedIn = false;
    setTimeout(() => {
      window.location.reload();
      this.router.navigate(['/login']);
    }, 1500);
  }


}
