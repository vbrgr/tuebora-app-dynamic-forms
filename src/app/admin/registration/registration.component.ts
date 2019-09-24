import { Component, OnInit, ViewChild } from '@angular/core';
import { DynamicFormComponent } from '../components/dynamic-form/dynamic-form.component';
import { FormService } from 'src/app/services/form.service';
import { FieldConfig } from '../models/Field.interface';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  formdata: {};
  @ViewChild(DynamicFormComponent, { static: true} ) form: DynamicFormComponent;
  constructor(private forms: FormService) {
    this.forms.getRegForm().subscribe(res => {
      const main = [];
      this.formdata = res[0].schema.properties;
      res[0].form[0].items.forEach(newkey => {
        newkey.items.forEach(key => {
          const data = this.getData(key);
          main.push(data);
        });

      });
      main.push(res[0].schema);
      localStorage.setItem('jsonregdata', JSON.stringify(main));
    });
  }
  regConfig: FieldConfig[] = JSON.parse(localStorage.getItem('jsonregdata'));
  getData(name) {
    return this.formdata[name];
  }
  submit(value: any) {
    
   }
}
