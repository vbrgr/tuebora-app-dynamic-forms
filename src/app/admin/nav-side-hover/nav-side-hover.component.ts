import { Component, OnInit, Input } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-nav-side-hover',
  templateUrl: './nav-side-hover.component.html',
  styleUrls: ['./nav-side-hover.component.css']
})
export class NavSideHoverComponent implements OnInit {
  @Input() primaryMenuData: any;
  @Input() utilityMenuData: any;
 // @Input() menuPosition: any;
  constructor() { }

  ngOnInit() {


  }

}
