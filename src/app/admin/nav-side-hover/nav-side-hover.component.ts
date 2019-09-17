import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-nav-side-hover',
  templateUrl: './nav-side-hover.component.html',
  styleUrls: ['./nav-side-hover.component.css']
})
export class NavSideHoverComponent implements OnInit {
  primaryData: any;
  utilityData: any;
  menuPosition: any;
  constructor(private menuServices: MenuService) { }

  ngOnInit() {
    this.menuServices.getMenuData().subscribe((data)=>{
      this.primaryData=data.sections.primary;
      this.utilityData=data.sections.utility;
      this.menuPosition=data.properties.position;
      /// console.log(this.menuPosition);
    });

  }

}
