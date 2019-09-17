import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-header-noicon',
  templateUrl: './header-noicon.component.html',
  styleUrls: ['./header-noicon.component.css']
})
export class HeaderNoiconComponent implements OnInit {
  primaryData: any;
  utilityData: any;
  menuPosition: any;
  constructor(private menuServices: MenuService) { }
  ngOnInit() {
     this.menuServices.getMenuData().subscribe((data)=>{
      this.primaryData=data.sections.primary;
      this.utilityData=data.sections.utility;
      this.menuPosition=data.properties.position;
      console.log(this.menuPosition);
    });

  }

}
