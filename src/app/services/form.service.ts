import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FieldConfig } from '../admin/models/Field.interface';

@Injectable({
  providedIn: 'root'
})
export class FormService {
formd: FieldConfig[];
  constructor(private http: HttpClient) { }

  public getForm() {
    return this.http.get('http://localhost:3000/form');
  }
  public getRegForm() {
    return this.http.get('http://localhost:3000/reg-form');
  }
}
