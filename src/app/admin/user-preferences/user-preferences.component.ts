import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserPreferences } from '../models/menu';

@Component({
  selector: 'app-user-preferences',
  templateUrl: './user-preferences.component.html',
  styleUrls: ['./user-preferences.component.css']
})
export class UserPreferencesComponent implements OnInit {
  pageTitle;
  menuType;
  isEdit = false;
  menuOptions: UserPreferences;
  preferencesForm: FormGroup;
  constructor(private menuServices: MenuService, private formBuilderServices: FormBuilder, private routerService: Router) {
    this.preferencesForm = this.formBuilderServices.group({
      position: ['top', [Validators.required]],
    });
  }
  ngOnInit() {
    this.menuServices.getMenuData().subscribe((data) => {
      //  console.log(data);
      this.pageTitle = data.sections.utility[0].label;
     // console.log(this.pageTitle);
      this.menuType = data.properties.position;
    });

    this.menuServices.menuEvent.subscribe(res => {
      this.menuType = res.position;
    });

    this.menuServices.userPrefernceData().subscribe(data => {
      this.menuOptions = data;
    });

  }

  get position() {
    return this.preferencesForm.get('position');
  }
  setUserpreference() {
    this.menuServices.updateMenu(this.preferencesForm.value).subscribe((res) => {

    });
    this.isEdit = false;
  }

  actionEdit() {
    this.isEdit = true;
  }
  closeBlock() {
    this.isEdit = false;
  }


}
