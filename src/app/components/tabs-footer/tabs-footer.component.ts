import { Component, OnInit } from '@angular/core';
import { MenuService } from './../../services/menu/menu.service';

@Component({
  selector: 'app-tabs-footer',
  templateUrl: './tabs-footer.component.html',
  styleUrls: ['./tabs-footer.component.scss'],
})
export class TabsFooterComponent implements OnInit {

  tabsMenu = [];

  constructor(
    private menuService: MenuService,
  ) { }

  ngOnInit() {
    this.tabsMenu = this.menuService.getElementsMenu();
  }

}
