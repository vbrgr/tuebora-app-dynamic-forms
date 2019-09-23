import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import { FieldConfig } from '../../models/Field.interface';

@Component({
  // tslint:disable-next-line:component-selector
  exportAs: 'dynamicForm',
  // tslint:disable-next-line:component-selector
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  @Input() fields: FieldConfig[] = [];

  @Output() submit: EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup;
  get value() {
    return this.form.value;
  }
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    //console.log(1);
    this.form = this.createControl();
  }

  onSubmit(event: Event) {
   // console.log(1);
    event.preventDefault();
    event.stopPropagation();
    if (this.form.valid) {
      this.submit.emit(this.form.value);
    } else {
      this.validateAllFormFields(this.form);
    }
  }

  createControl() {
    const group = this.fb.group({});
    this.fields.forEach(field => {

      if (field.validations) {
        field.validations.forEach(key => {
          var validateby = key.validator;
          if (key.name === 'required') {
            key.validator = Validators.required;
            if (!key.message || key.message === '') {
              key.message = field.label + ' is required';
            }
          }
          if (key.name === 'pattern') {
            key.validator = Validators.pattern(validateby);
            if (!key.message || key.message === '') {
              key.message = field.label + ' does not match the pattern';
            }
          }
          if (key.name === 'min') {
            key.validator = Validators.minLength(validateby);
            if (!key.message || key.message === '') {
              key.message = field.label + ' cannot be less than ' + validateby;
            }
          }
          if (key.name === 'max') {
            key.validator = Validators.maxLength(validateby);
            if (!key.message || key.message === '') {
              key.message = field.label + ' cannot be greater than ' + validateby;
            }
          }
          if (key.name === 'minLength' || key.name === 'minlength') {
            key.validator = Validators.minLength(key.validator);
            if (!key.message || key.message === '') {
              key.message = field.label + ' must be longer than ' + validateby + ' characters.';
            }
          }
          if (key.name === 'maxLength' || key.name === 'maxlength') {
            key.validator = Validators.maxLength(key.validator);
            if (!key.message || key.message === '') {
              key.message = field.label + ' must be shorter than ' + validateby + ' characters.';
            }
          }
        });
      }
      if (field.type !== 'button' && field.type !== 'object') {
        const control = this.fb.control(
          field.value,
          this.bindValidations(field.validations || [])
        );
        group.addControl(field.name, control);
        // console.log(control.errors);
      }
    });
    return group;
  }

  bindValidations(validations: any) {
    if (validations.length > 0) {
      const validList = [];
      validations.forEach(valid => {
        validList.push(valid.validator);
      });
      return Validators.compose(validList);
    }
    return null;
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }

}
