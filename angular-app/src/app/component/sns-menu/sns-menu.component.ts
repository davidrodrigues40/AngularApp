import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../model/menu-item';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sns-menu',
  templateUrl: './sns-menu.component.html',
  styleUrls: ['./sns-menu.component.css']
})
export class SnsMenuComponent implements OnInit {
  menuItems: MenuItem[] = [
    { order: 1, displayName: 'Create Topic', routerLink: '/sns/topic' },
    { order: 2, displayName: 'Subscribe', routerLink: '/sns/subscribe' },
    { order: 3, displayName: 'Send Message', routerLink: '/sns/message' },
    { order: 4, displayName: 'Unsubscribe', routerLink: '/sns/unsubscribe' }
  ];

  constructor() { }

  ngOnInit() {
  };

  setRouterLinkActive(routerLink){
      return true;
  }

}
