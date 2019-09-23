import { Component, ViewChild } from '@angular/core';
import { FieldConfig } from '../models/Field.interface';
import { DynamicFormComponent } from '../components/dynamic-form/dynamic-form.component';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-user-dynamic-form',
  templateUrl: './user-dynamic-form.component.html',
  styleUrls: ['./user-dynamic-form.component.css']
})
export class UserDynamicFormComponent {
  formdata: {};
  @ViewChild(DynamicFormComponent, { static: true} ) form: DynamicFormComponent;
  constructor(private forms: FormService) {
    this.forms.getForm().subscribe(res => {
      const main = [];
      this.formdata = res[0].schema.properties;
      res[0].form[0].items.forEach(newkey => {
        newkey.items.forEach(key => {
          const data = this.getData(key);
          main.push(data);
        // console.log(data);
        });

      });
      main.push(res[0].schema);
      localStorage.setItem('jsondata', JSON.stringify(main));
    });
  }
  regConfig: FieldConfig[] = JSON.parse(localStorage.getItem('jsondata'));
  getData(name) {
    return this.formdata[name];
  }


  submit(value: any) {
    console.log(1);
   }
}
