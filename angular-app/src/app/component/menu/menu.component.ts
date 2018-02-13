import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../model/menu-item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItems: MenuItem[] = [
    { order: 1, displayName: 'Home', routerLink: '/dashboard' },
    { order: 2, displayName: 'SNS Testing', routerLink: '/sns' },
    { order: 3, displayName: 'Reports', routerLink: '/reports' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
