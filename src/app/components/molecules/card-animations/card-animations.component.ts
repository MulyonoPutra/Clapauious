import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-animations',
  templateUrl: './card-animations.component.html',
  styleUrls: ['./card-animations.component.scss'],
})
export class CardAnimationsComponent {
  
  @Input() data: any;

  imageConfig: string = 'https://image.tmdb.org/t/p/w500/';

  constructor(public router: Router) {}

  get posterPath(): string {
    return `${this.imageConfig}/${this.data.poster_path}`;
  }

  navigateWithState(id: any) {
    this.router.navigateByUrl('/movie-details/' + id);
  }
}
