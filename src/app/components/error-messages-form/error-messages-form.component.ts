import { ChangeDetectionStrategy, Component, OnInit, Input } from '@angular/core'
import { UntypedFormControl } from '@angular/forms';
import { ValidationService } from 'src/app/core/service/validation.service';

@Component({
  selector: 'app-error-messages-form',
  templateUrl: './error-messages-form.component.html',
  styleUrls: ['./error-messages-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorMessagesFormComponent implements OnInit {

  @Input() control!: UntypedFormControl;

  constructor() { }

  ngOnInit() {
  }

  get errorMessage() {
    for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }

    return null;
  }

}
