import { Component, EventEmitter, Output } from '@angular/core';
import { navbarData } from './nav-data';

interface SideNaveToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  @Output() onToggleSideNav: EventEmitter<SideNaveToggle> = new EventEmitter();
  screenWidth = 0;
  collapsed = false;
  navData = navbarData;

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth })
  }

  togglecollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth })
  }
}
