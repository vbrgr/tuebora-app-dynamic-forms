import { Component, OnInit, Input, Output, EventEmitter,  } from '@angular/core';


@Component({
  // tslint:disable-next-line: component-selector
   selector: 'tuebora-sidebar',
  templateUrl: './tue-sidebar.component.html',
  styleUrls: ['./tue-sidebar.component.css']
})
export class TueSidebarComponent implements OnInit {
  activeLink;
  @Input() primaryMenuData: any;
  @Input() utilityMenuData: any;
  @Output() closeEvent = new EventEmitter();
  private _opened: boolean = false;
  constructor() { }
  ngOnInit() {
   // console.log('slidemenu', this.primaryMenuData);
  }
  slideClose(){
    this.closeEvent.emit();
  }
  actionLink(){
      this.closeEvent.emit(true);
  }


}
