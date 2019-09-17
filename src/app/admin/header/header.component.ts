import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  primaryData: any;
  utilityData: any;
  menuPosition: any;
  constructor(private menuServices: MenuService) { }

  ngOnInit() {
    this.menuServices.getMenuData().subscribe((data)=>{
      console.log(data);
      this.primaryData=data.sections.primary;
      this.utilityData=data.sections.utility;
      this.menuPosition=data.properties.position;

    });

  }

}
