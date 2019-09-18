import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FieldConfig } from '../admin/models/Field.interface';
import { map } from 'rxjs/operators';
import { FormBuilder } from '@angular/forms';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FormService {
formd: FieldConfig[];
  constructor(private http: HttpClient,
              private readonly fb: FormBuilder) { }

  public getForm() {
    return this.http.get('https://my-json-server.typicode.com/vbrgr/demo-json/form');
  }
  public getUserForm() {
    this.http.get('https://my-json-server.typicode.com/vbrgr/dynamic-form').subscribe((res) => {
      this.setFormData(res);
    });
    return this.http.get<FieldConfig[]>('https://my-json-server.typicode.com/vbrgr/dynamic-form');
  }
  public getFormData() {
    return this.formd;
  }
  public setFormData(data) {
    this.formd = data;
  }
}
