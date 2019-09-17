import { Component, OnInit, AfterViewInit  } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
export declare var $:any;

@Component({
  selector: 'app-nav-side-toggle',
  templateUrl: './nav-side-toggle.component.html',
  styleUrls: ['./nav-side-toggle.component.css']
})
export class NavSideToggleComponent implements OnInit {
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

  ngAfterViewInit(){


      $('[data-toggle="tooltip"]').tooltip();
      $(".main-navh").click(function(){
        $("#wrapper").removeClass("enlarged");
      });

      if((navigator.userAgent.match(/iPad/i))) {
        $('.scroll-line').show();
        var touch;
        document.addEventListener('touchmove', function(e) {
          $('.scroll-line').hide();
          }, false);
          $('.table-responsive').scroll(function() {
            touch=this.scrollLeft;
          });

        document.addEventListener('touchend', function(e) {
        setTimeout(function(){
        $('.scroll-line').show().offset({ left: touch});
        },1100);

        }, false);

      }










  }






}

