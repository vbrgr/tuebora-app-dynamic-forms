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
    return this.http.get('http://192.168.1.37:3000/form');
  }
  public getRegForm() {
    return this.http.get('http://192.168.1.37:3000/reg-form');
  }
}
