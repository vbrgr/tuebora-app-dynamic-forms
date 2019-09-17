import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router'
@Component({
  selector: 'app-user-preferences',
  templateUrl: './user-preferences.component.html',
  styleUrls: ['./user-preferences.component.css']
})
export class UserPreferencesComponent implements OnInit {
  pageTitle;

  preferencesForm: FormGroup;

  constructor(private menuServices: MenuService, private formBuilderServices: FormBuilder, private routerService:Router ) {
    this.preferencesForm=this.formBuilderServices.group({
      position:['top', [Validators.required]],
    });

  }

  ngOnInit() {
    this.menuServices.getMenuData().subscribe((data)=>{
      console.log(data);
      this.pageTitle= data.sections.utility.label;


    });
  }

  get position(){
    return this.preferencesForm.get('position');
  }
  setUserpreference(){
    console.log(this.preferencesForm.value);
    this.menuServices.updateMenu(this.preferencesForm.value).subscribe((res)=>{
     // this.routerService.navigate(['/']);
   });
   this.menuServices.getMenuData().subscribe(res=>{});



  }


}
