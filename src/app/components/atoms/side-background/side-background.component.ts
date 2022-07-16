import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-background',
  templateUrl: './side-background.component.html',
  styleUrls: ['./side-background.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideBackgroundComponent implements OnInit {

  @Input() heading:string | undefined;
  @Input() desc:string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
