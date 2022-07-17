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


}
