import {Component, OnInit} from '@angular/core';
interface SideNaveToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'GestionComptabilite-FrontEnd';

  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data : SideNaveToggle):void{
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
