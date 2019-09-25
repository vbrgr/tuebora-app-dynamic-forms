import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menuEvent = new EventEmitter();
  private menuJson = {};
  private headers = new Headers({ 'Content-Type': 'application/json' });


  constructor(private http: HttpClient) { }


  public getMenuData(): any {
    this.http.get('http://localhost:3000/menu/').subscribe((res) => {
      this.setMenuJson(res);

    });
    return this.http.get('http://localhost:3000/menu/');

  }


  public updateMenu(menuPos:any): any {
    const menuData = this.getMenuJson();
    menuData['properties'] = menuPos;
    // console.log('test',this.getMenuJson());
    this.eventEmiter(menuPos);
    return this.http.put('http://localhost:3000/menu/', menuData);

  }

  public setMenuJson(dynVal) {
    this.menuJson = dynVal;
  }
  public getMenuJson() {
    return this.menuJson;
  }

  eventEmiter(menuPos) {
    this.menuEvent.emit(menuPos);
  }
  public userPrefernceData(): any {

    return this.http.get('http://localhost:3000/user-prefernce/');
  }


}
