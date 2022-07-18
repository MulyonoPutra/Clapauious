import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-card-animations',
    templateUrl: './card-animations.component.html',
    styleUrls: ['./card-animations.component.scss']
})
export class CardAnimationsComponent {

    @Input() data: any;

    imageConfig: string = 'https://image.tmdb.org/t/p/w500/'

    constructor () {}

    get posterPath(): string {
      return `${this.imageConfig}/${this.data.poster_path}`
    }
}
