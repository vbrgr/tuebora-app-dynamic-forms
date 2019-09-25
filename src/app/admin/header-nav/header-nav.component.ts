import { Component, OnInit, Input } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'tuebora-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {
 @Input() primaryMenuData: any;
 @Input() utilityMenuData: any;
 @Input() menuType: any;

  constructor(private menuServices: MenuService) { }

  ngOnInit() {
    // console.log('input Val', this.primaryMenuData);
    // console.log('meny Type', this.menuType);
  }

}
