import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../model/menu-item';

@Component({
  selector: 'app-sns-menu',
  templateUrl: './sns-menu.component.html',
  styleUrls: ['./sns-menu.component.css']
})
export class SnsMenuComponent implements OnInit {
  menuItems: MenuItem[] = [
    { order: 1, displayName: 'Create Topic', routerLink: '/sns-topic' },
    { order: 2, displayName: 'Subscribe', routerLink: '/sns-subscribe'},
    { order: 3, displayName: 'Send Message', routerLink: '/sns-message'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
