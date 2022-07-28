import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricingComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

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
