import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { NavigationMenu } from '../models/menu';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mainroot',
  templateUrl: './mainroot.component.html',
  styleUrls: ['./mainroot.component.css']
})
export class MainrootComponent implements OnInit {
  primaryMenu: NavigationMenu;
  utilityData: NavigationMenu;
  menuPosition: any;
  // tslint:disable-next-line: variable-name
  private _opened: boolean = false;
  private _isBrowser: boolean;

  // private _toggleSidebar() {
  //   this._opened = !this._opened;
  // }

  @Output() _onRerender: EventEmitter<null> = new EventEmitter<null>();

  constructor(private menuServices: MenuService) {
   this.menuServices.menuEvent.subscribe(res => {
      this.menuPosition = res.position;
    });

  }

  ngOnInit() {
    this.menuServices.getMenuData().subscribe((data) => {
      this.menuPosition = data.properties.position;
      this.primaryMenu = data.sections.primary;
      this.utilityData = data.sections.utility;
     });
  }

  private _toggleOpened(): void {
    this._opened = !this._opened;

  }



}
