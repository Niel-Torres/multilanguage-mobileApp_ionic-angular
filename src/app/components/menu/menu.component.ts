import { Component, OnInit } from '@angular/core';
import { MenuService } from './../../services/menu/menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  linksMenu = [];

  constructor(
    private menuService: MenuService,
    private router: Router
  ) { }

  ngOnInit() {
    this.linksMenu = this.menuService.getElementsMenu();
  }

  goToLink(link){
    this.router.navigate([link]);
  }

}
